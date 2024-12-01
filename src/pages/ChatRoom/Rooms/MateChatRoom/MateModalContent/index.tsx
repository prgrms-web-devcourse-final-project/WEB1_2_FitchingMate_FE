import {
  ChatBottomModalContainer,
  SubmitButtonContainer,
} from '@pages/ChatRoom/style'

import { useMateChatStore } from '@store/useMateChatStore'
import RecruitStatusSection from '../RecruitStatusSection'
import { ChatType } from '@pages/ChatPage'
import UserListSection from '../../UserListSection'

interface ChatBottomModalProps {
  handleAlertClick: () => void
  currentChatType: ChatType
}

const MateModalContent = ({
  handleAlertClick,
  currentChatType,
}: ChatBottomModalProps) => {
  const { isOwner, recruitStatus, setCurrentAlertStatus } = useMateChatStore()

  const handleExitChatClick = () => {
    setCurrentAlertStatus({ type: 'CHAT_EXIT' })
    handleAlertClick()
  }

  const handleCompleteClick = () => {
    switch (recruitStatus) {
      case '모집완료':
        setCurrentAlertStatus({ type: 'MATE_COMPLETE' })
        break

      case '모집중':
        setCurrentAlertStatus({ type: 'MATE_STATUS_CHANGE' })
        break

      case '직관완료':
        setCurrentAlertStatus({ type: 'GAME_COMPLETE' })
        break
    }

    handleAlertClick()
  }

  return (
    <ChatBottomModalContainer>
      {isOwner && <RecruitStatusSection />}

      <UserListSection
        currentChatType={currentChatType}
        handleAlertClick={handleAlertClick}
      />

      <SubmitButtonContainer $isOwner={isOwner}>
        <button onClick={handleExitChatClick}>채팅방 나가기</button>
        <button
          disabled={!isOwner}
          onClick={handleCompleteClick}
        >
          {recruitStatus}
        </button>
      </SubmitButtonContainer>
    </ChatBottomModalContainer>
  )
}

export default MateModalContent
