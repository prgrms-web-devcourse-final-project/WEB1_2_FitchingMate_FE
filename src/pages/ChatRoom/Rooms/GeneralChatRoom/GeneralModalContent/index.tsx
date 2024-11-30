import { ChatType } from '@pages/ChatPage'
import {
  ChatBottomModalContainer,
  GeneralChatButton,
} from '@pages/ChatRoom/style'
import UserListSection from '../../UserListSection'

interface ChatBottomModalProps {
  handleAlertClick: () => void
  currentChatType: ChatType
}

const GeneralModalContent = ({
  handleAlertClick,
  currentChatType,
}: ChatBottomModalProps) => {
  const handleExitChatClick = () => {
    handleAlertClick()
  }

  return (
    <ChatBottomModalContainer>
      <UserListSection
        currentChatType={currentChatType}
        handleAlertClick={handleAlertClick}
      />
      <GeneralChatButton onClick={handleExitChatClick}>
        채팅방 나가기
      </GeneralChatButton>
    </ChatBottomModalContainer>
  )
}

export default GeneralModalContent
