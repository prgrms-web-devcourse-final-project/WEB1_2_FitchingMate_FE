import { useModal } from '@hooks/useModal'

import { EnterChatMessage, MateChatCardContainer } from '../../style'
import { GlobalFloatAside } from '@styles/globalStyle'
import ChatInput from '@pages/ChatRoom/ChatInput'
import BottomModal from '@components/BottomModal'
import Alert from '@components/Alert'

import MateModalContent from './MateModalContent'
import ALERT_MESSAGE from '@constants/alertMessage'

import { useMateChatStore } from '@store/useMateChatStore'
import useGetMatePost from '@hooks/usegetMatePost'
import { transformMatePostToCardData } from '@utils/formatPostData'
import { useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import mateChatService from '@apis/mateChatService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useSocket } from '@hooks/useSocket'
import { formatChatContent } from '@utils/formatChatContent'
import MateChatCard from '@pages/ChatRoom/ChatCard/MateChatCard'
import MainMateCard from '@components/MainMateCard'
import { useEffect, useRef, useState } from 'react'
import { RecruitStatus } from './RecruitStatusSection'
import {
  useChangeMateRecruitStatus,
  useCompleteMatePost,
} from '@hooks/useCompleteMate'
import { createBrowserHistory } from 'history'
import { ToastContainer } from 'react-toastify'
import useExitGoodsChat from '@hooks/useGoodsChat'
import { useMateChatExit } from '@hooks/useChatExit'

export interface MateChatMessage {
  message: string
  messageId: number
  messageType: string
  roomId: number
  sendTime: string
  senderId: number
  senderImageUrl: string
  senderNickname: string
}

const MateChatRoom = () => {
  const [currentMessageList, setCurrentMessageList] = useState<
    MateChatMessage[]
  >([])

  // 채팅방 알럿 상태 관리
  const {
    currentAlertStatus,
    setRecruitStatus,
    recruitStatus,
    participants,
    confirmedParticipants,
    setCurrentPostStatus,
    setIsOwner,
  } = useMateChatStore()

  const {
    state: { postId },
  } = useLocation()
  // 모달 관리
  const {
    bottomModalRef,
    alertRef,
    handleOpenBottomModal,
    handleCloseBottomModal,
    handleAlertClick,
  } = useModal()

  const { id: chatRoomId, type: chatType } = useParams()

  // 채팅방 상세 조회
  const {
    data: messageList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.MATE_CHATROOM, chatRoomId],
    queryFn: () => mateChatService.getMateChatRoomDetail(chatRoomId as string),
  })

  // 채팅방과 연동된 메이트 게시글 조회
  const { matePost, matePostLoading, matePostErrorMessage, matePostError } =
    useGetMatePost(postId as number)

  // 모집중 <-> 모집완료 상태 변경
  const {
    changeMateRecruitStatus,
    isMateRecruitStatusPending,
    isMateRecruitStatusError,
    mateRecruitStatusError,
  } = useChangeMateRecruitStatus()

  // 직관완료 요청
  const {
    completeMatePost,
    isCompleteMatePostPending,
    isCompleteMatePostError,
    completeMatePostError,
  } = useCompleteMatePost(postId as string)

  const IS_CHAT_ROOM = true

  const { mateExitMutate } = useMateChatExit(chatRoomId as string, IS_CHAT_ROOM)

  /**
   * 소켓 연동
   *
   * 내부 useEffcet안에서 소켓연동
   *
   * @param chatType 채팅 타입
   * @param chatRoomId 채팅방 id
   *
   * @returns 소켓 연동 함수
   * handleMessage 함수
   * 채팅 데이터가 업데이트 될 때마다 스테이트에 관리
   */

  const handleMessage = (message: MateChatMessage) => {
    setCurrentMessageList((prev) => {
      if (prev.length >= 20) {
        const startIndex = 0
        const endIndex = currentMessageList.length - 1
        const prevSlice = prev.slice(startIndex, endIndex)

        return [message, ...prevSlice]
      }

      return [message, ...prev]
    })
  }

  const { submitChat } = useSocket({
    chatType: chatType as string,
    chatRoomId: chatRoomId as string,
    onListen: handleMessage,
  })

  /**
   * 스크롤 관련 처리
   *
   * 채팅 데이터가 업데이트 될 때마다 스크롤을 최하단으로 이동
   */
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (currentMessageList.length > 0 && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [matePost, currentMessageList])

  useEffect(() => {
    if (messageList) {
      setCurrentMessageList(messageList.content)
    }
  }, [messageList])

  // 메이트 게시글 상태 업데이트
  useEffect(() => {
    if (matePost) {
      const currentMemberNickname = localStorage.getItem('nickname')

      setRecruitStatus(matePost.status as RecruitStatus)
      setCurrentPostStatus(matePost.status as '모집중' | '모집완료' | '완료')
      setIsOwner(matePost.nickname === currentMemberNickname)
    }
  }, [matePost])

  /**
   * 뒤로가기 이벤트 처리
   *
   * 사용자가 뒤로가기 버튼을 눌렀을 때 채팅방 데이터를 초기화
   */
  const history = createBrowserHistory()

  useEffect(() => {
    history.listen((location) => {
      if (location.action === 'POP' || location.action === 'PUSH') {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.MATE_CHATROOM, chatRoomId],
        })

        queryClient.invalidateQueries({
          queryKey: [QUERY_KEY.MATE_CHAT_LIST],
        })
      }
    })
  }, [chatRoomId])

  if (!messageList) return null

  const currentAlertMessage = () => {
    const { type, userName } = currentAlertStatus
    const message = ALERT_MESSAGE[type]

    if (typeof message === 'function') {
      return message(userName || '')
    }

    return message
  }

  if (!matePost) return null

  const cardData = transformMatePostToCardData(matePost)

  const handleChangeMateRecruitStatus = () => {
    const recruitData = {
      status: recruitStatus as RecruitStatus,
      participantIds: participants,
    }

    changeMateRecruitStatus(recruitData)
  }

  const handleCompleteMatePost = () => {
    const recruitData = {
      participantIds: confirmedParticipants,
    }

    completeMatePost(recruitData)
  }

  const handleAlertAction = () => {
    if (
      currentAlertStatus.type === 'MATE_STATUS_CHANGE' ||
      currentAlertStatus.type === 'MATE_COMPLETE'
    ) {
      handleChangeMateRecruitStatus()
    }
    if (currentAlertStatus.type === 'GAME_COMPLETE') {
      handleCompleteMatePost()
    }

    if (currentAlertStatus.type === 'CHAT_EXIT') {
      mateExitMutate()
    }
    handleCloseBottomModal()
  }

  return (
    <>
      <MainMateCard card={cardData} />

      <MateChatCardContainer ref={chatContainerRef}>
        {[...currentMessageList]?.reverse().map((message) =>
          message.messageType !== '대화' ? (
            <EnterChatMessage key={message.messageId}>
              {formatChatContent(message.message)}
            </EnterChatMessage>
          ) : (
            <MateChatCard
              key={message.messageId}
              message={message}
            />
          ),
        )}
      </MateChatCardContainer>

      <GlobalFloatAside>
        <ChatInput
          handleOpenBottomModal={handleOpenBottomModal}
          submitChat={submitChat}
        />
      </GlobalFloatAside>

      <BottomModal ref={bottomModalRef}>
        <MateModalContent handleAlertClick={handleAlertClick} />
      </BottomModal>

      <Alert
        ref={alertRef}
        {...currentAlertMessage()}
        handleAlertClick={handleAlertAction}
      />
      <ToastContainer />
    </>
  )
}

export default MateChatRoom
