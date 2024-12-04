import { GlobalFloatAside } from '@styles/globalStyle'

import ChatInput from '../../ChatInput'
import GoodsListCard from '@components/GoodsListCard'
import BottomModal from '@components/BottomModal'
import Alert from '@components/Alert'
import { ChatCardContainer } from '../../style'
import ChatCard from '../../ChatCard'
import GoodsModalContent from './GoodsModalContent'

import { useModal } from '@hooks/useModal'
import { useGoodsChatStore } from '@store/useGoodsChatStore'
import ALERT_MESSAGE from '@constants/alertMessage'
import { ChatType } from '@pages/ChatPage'
import useGetGoodsPost from '@hooks/usegetGoodsPost'

const GoodsChatRoom = ({ currentChatType }: { currentChatType: ChatType }) => {
  const { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick } =
    useModal()

  const { goodsAlertStatus } = useGoodsChatStore()

  const { goodsPost } = useGetGoodsPost(30)

  console.log(goodsPost)

  const currentAlertMessage = () => {
    const { type, userName } = goodsAlertStatus
    const message = ALERT_MESSAGE[type]

    if (typeof message === 'function') {
      return message(userName || '')
    }

    return message
  }

  if (!goodsPost) return null

  return (
    <>
      <GoodsListCard goodsPost={goodsPost} />

      <ChatCardContainer>
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
