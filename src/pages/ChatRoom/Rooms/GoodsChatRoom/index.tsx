import { GlobalFloatAside } from '@styles/globalStyle'

import ChatInput from '../../ChatInput'
import GoodsListCard from '@components/GoodsListCard'
import BottomModal from '@components/BottomModal'
import Alert from '@components/Alert'
import { ChatCardContainer, EnterChatMessage } from '../../style'
import GoodsModalContent from './GoodsModalContent'

import { useModal } from '@hooks/useModal'
import { useGoodsChatStore } from '@store/useGoodsChatStore'
import ALERT_MESSAGE from '@constants/alertMessage'

import goodsChatService from '@apis/goodsChatService'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import { formatChatContent } from '@utils/formatChatContent'
import { useGoodsChatExit } from '@hooks/useChatExit'
import { useParams } from 'react-router-dom'
import { useSocket } from '@hooks/useSocket'

const GoodsChatRoom = () => {
  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const { goodsAlertStatus } = useGoodsChatStore()

  const { type: chatType, id: chatRoomId } = useParams()

  /**
   * 채팅방 상세 조회
   * 채팅방 상세 조회 성공 시 쿼리 데이터 갱신
   */

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY.GOODS_CHATROOM, chatRoomId],
    queryFn: () => goodsChatService.getGoodsChatroom(chatRoomId as string),
  })

  /**
   * 채팅방 나가기
   * 채팅방 나가기 버튼 클릭 시 호출
   * 채팅방 나가기 성공 시 쿼리 데이터 갱신
   */

  const {
    goodsExitMutate,
    isGoodsExitPending,
    isGoodsExitError,
    goodsExitError,
  } = useGoodsChatExit(chatRoomId as string)

  /**
   * 소켓 연결 훅
   *
   * @param chatType 채팅방 타입
   * @param chatRoomId 채팅방 아이디
   *
   * @returns submitChat 함수
   */

  const { submitChat } = useSocket(chatType as string, chatRoomId as string)

  if (!data || !chatRoomId || !submitChat) return null

  const {
    imageUrl,
    title,
    price,
    postStatus,
    category,
    teamName,
    initialMessages,
  } = data

  const { content: messageList } = initialMessages

  const formatData = {
    imageUrls: [imageUrl],
    title,
    price,
    status: postStatus,
    category,
    teamName,
  }

  const currentAlertMessage = () => {
    const { type, userName } = goodsAlertStatus
    const message = ALERT_MESSAGE[type]

    if (typeof message === 'function') {
      return message(userName || '')
    }

    return message
  }

  console.log(messageList)

  return (
    <>
      <GoodsListCard goodsPost={formatData} />

      <ChatCardContainer>
        {messageList?.map((message) =>
          message.messageType !== '대화' ? (
            <EnterChatMessage key={message.chatMessageId}>
              {formatChatContent(message.message)}
            </EnterChatMessage>
          ) : (
            <div>asdfsadf</div>
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
        <GoodsModalContent
          handleAlertClick={handleAlertClick}
          chatRoomId={chatRoomId}
        />
      </BottomModal>

      <Alert
        ref={alertRef}
        {...currentAlertMessage()}
        handleAlertClick={goodsExitMutate}
      />
    </>
  )
}

export default GoodsChatRoom
