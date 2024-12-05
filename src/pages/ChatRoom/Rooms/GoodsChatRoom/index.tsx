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
import useGetGoodsPost from '@hooks/usegetGoodsPost'
import goodsChatService from '@apis/goodsChatService'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import { formatChatContent } from '@utils/formatChatContent'

const GoodsChatRoom = ({ currentChatType }: { currentChatType: ChatType }) => {
  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const { goodsAlertStatus } = useGoodsChatStore()

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.GOODS_CHATROOM, 1],
    queryFn: () => goodsChatService.getGoodsChatroom(1),
  })

  if (!data) return null

  const {
    imageUrl,
    title,
    price,
    postStatus,
    category,
    teamName,
    initialMessages,
  } = data

  console.log(initialMessages)

  const { content } = initialMessages

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

  console.log(content)

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
      />
    </>
  )
}

export default GoodsChatRoom
