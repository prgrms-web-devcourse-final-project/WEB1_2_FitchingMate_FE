import { useModal } from '@hooks/useModal'

import { ChatCardContainer, EnterChatMessage } from '../../style'
import { GlobalFloatAside } from '@styles/globalStyle'
import ChatInput from '@pages/ChatRoom/ChatInput'
import BottomModal from '@components/BottomModal'
import Alert from '@components/Alert'

import MateModalContent from './MateModalContent'
import ALERT_MESSAGE from '@constants/alertMessage'

import { useMateChatStore } from '@store/useMateChatStore'
import { ChatType } from '@pages/ChatPage'
import useGetMatePost from '@hooks/usegetMatePost'
import { transformMatePostToCardData } from '@utils/formatPostData'
import { useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import mateChatService from '@apis/mateChatService'
import { QUERY_KEY } from '@apis/queryClient'
import { useSocket } from '@hooks/useSocket'
import { formatChatContent } from '@utils/formatChatContent'
import MateChatCard from '@pages/ChatRoom/ChatCard/MateChatCard'
import MainMateCard from '@components/MainMateCard'
import { useEffect } from 'react'
import { RecruitStatus } from './RecruitStatusSection'
import { useCompleteMate, useCompleteMatePost } from '@hooks/useCompleteMate'

const MateChatRoom = () => {
  // 채팅방 알럿 상태 관리
  const {
    currentAlertStatus,
    setRecruitStatus,
    recruitStatus,
    participants,
    confirmedParticipants,
  } = useMateChatStore()

  const {
    state: { postId },
  } = useLocation()
  // 모달 관리
  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const { id: chatRoomId, type: chatType } = useParams()

  console.log(chatRoomId)

  // 채팅방 상세 조회
  const {
    data: messageList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.MATE_CHATROOM, chatRoomId],
    queryFn: () =>
      mateChatService.getMateChatRoomDetail(chatRoomId as string, 1),
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
  } = useCompleteMate()

  // 직관완료 요청
  const {
    completeMatePost,
    isCompleteMatePostPending,
    isCompleteMatePostError,
    completeMatePostError,
  } = useCompleteMatePost(postId as string)

  /**
   * 소켓 연동
   *
   * 내부 useEffcet안에서 소켓연동
   *
   * @param chatType 채팅 타입
   * @param chatRoomId 채팅방 id
   *
   * @returns 소켓 연동 함수
   */
  const { submitChat } = useSocket(chatType as ChatType, chatRoomId as string)

  // 메이트 게시글 상태 업데이트
  useEffect(() => {
    if (matePost) {
      setRecruitStatus(matePost.status as RecruitStatus)
    }
  }, [matePost])

  if (!messageList) return null

  console.log(messageList)

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

    console.log(recruitData)

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
  }

  return (
    <>
      <MainMateCard card={cardData} />

      <ChatCardContainer>
        {messageList?.content?.map((message) =>
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
      </ChatCardContainer>

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
    </>
  )
}

export default MateChatRoom
