import { useModal } from '@hooks/useModal'

import { ChatCardContainer, EnterChatMessage } from '../../style'
import MateCard from '@components/MateCard'
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

const MateChatRoom = ({ currentChatType }: { currentChatType: ChatType }) => {
  // 채팅방 알럿 상태 관리
  const { currentAlertStatus, setRecruitStatus } = useMateChatStore()

  const {
    state: { postId },
  } = useLocation()
  // 모달 관리
  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const { id: chatRoomId, type: chatType } = useParams()

  // 채팅방 상세 조회
  const {
    data: messageList,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.MATE_CHATROOM, chatRoomId],
    queryFn: () =>
      mateChatService.getMateChatRoomDetail(chatRoomId as string, 0),
  })

  // 채팅방과 연동된 메이트 게시글 조회
  const { matePost, matePostLoading, matePostErrorMessage, matePostError } =
    useGetMatePost(postId as number)

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
        <MateModalContent
          handleAlertClick={handleAlertClick}
          currentChatType={currentChatType}
        />
      </BottomModal>

      <Alert
        ref={alertRef}
        {...currentAlertMessage()}
      />
    </>
  )
}

export default MateChatRoom
