import { GlobalFloatAside } from '@styles/globalStyle'

import ChatInput from '../../ChatInput'
import GoodsListCard from '@components/GoodsListCard'
import BottomModal from '@components/BottomModal'
import Alert from '@components/Alert'
import { ChatCardContainer, EnterChatMessage } from '../../style'
import ChatCard from '../../ChatCard'
import GoodsModalContent from './GoodsModalContent'

import { useModal } from '@hooks/useModal'
import { useGoodsChatStore } from '@store/useGoodsChatStore'
import ALERT_MESSAGE from '@constants/alertMessage'
import { ChatType } from '@pages/ChatPage'

import goodsChatService from '@apis/goodsChatService'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import { formatChatContent } from '@utils/formatChatContent'
import { useGoodsChatExit } from '@hooks/useChatExit'
import { useParams } from 'react-router-dom'

const GoodsChatRoom = ({ currentChatType }: { currentChatType: ChatType }) => {
  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const { goodsAlertStatus } = useGoodsChatStore()

  const { id: chatRoomId } = useParams()
  console.log(chatRoomId)

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

  if (!data || !chatRoomId) return null

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

  return (
    <>
      <GoodsListCard goodsPost={formatData} />

      <ChatCardContainer>
        <EnterChatMessage>
          {formatChatContent('tester3님이 대화를 시작했습니다.')}
        </EnterChatMessage>
        <ChatCard isUserChat={true} />
        <ChatCard isUserChat={true} />
        <ChatCard isUserChat={true} />
        <ChatCard isUserChat={false} />
        <ChatCard isUserChat={false} />
        <ChatCard isUserChat={false} />
        <ChatCard isUserChat={false} />
      </ChatCardContainer>

      <GlobalFloatAside>
        <ChatInput handleOpenBottomModal={handleOpenBottomModal} />
      </GlobalFloatAside>

      <BottomModal ref={bottomModalRef}>
        <GoodsModalContent
          handleAlertClick={handleAlertClick}
          currentChatType={currentChatType}
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
