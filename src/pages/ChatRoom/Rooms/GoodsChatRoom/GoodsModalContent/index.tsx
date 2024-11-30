import { ChatType } from '@pages/ChatPage'
import {
  ChatBottomModalContainer,
  SubmitButtonContainer,
} from '@pages/ChatRoom/style'

import { useGoodsChatStore } from '@store/useGoodsChatStore'
import UserListSection from '../../UserListSection'

interface ChatBottomModalProps {
  handleAlertClick: () => void
  currentChatType: ChatType
}

const GoodsModalContent = ({
  handleAlertClick,
  currentChatType,
}: ChatBottomModalProps) => {
  const { isOwner, isTrade, goodsAlertStatus, setGoodsAlertStatus } =
    useGoodsChatStore()

  const handleExitChatClick = () => {
    setGoodsAlertStatus({ type: 'CHAT_EXIT' })
    handleAlertClick()
  }

  const handleCompleteClick = () => {
    setGoodsAlertStatus({ type: 'DEAL_COMPLETE', userName: '빌터' })
    handleAlertClick()
  }

  return (
    <ChatBottomModalContainer>
      <UserListSection
        currentChatType={currentChatType}
        handleAlertClick={handleAlertClick}
      />
      <SubmitButtonContainer $isOwner={isOwner}>
        <button onClick={handleExitChatClick}>채팅방 나가기</button>
        <button
          onClick={handleCompleteClick}
          disabled={!isOwner}
        >
          {isOwner ? '거래완료' : ''}
        </button>
      </SubmitButtonContainer>
    </ChatBottomModalContainer>
  )
}

export default GoodsModalContent
