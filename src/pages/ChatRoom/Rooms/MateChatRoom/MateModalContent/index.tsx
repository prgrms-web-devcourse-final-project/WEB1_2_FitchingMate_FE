import {
  ChatBottomModalContainer,
  Section,
  SubmitButtonContainer,
} from '@pages/ChatRoom/style'

import { useMateChatStore } from '@store/useMateChatStore'
import RecruitStatusSection from '../RecruitStatusSection'
import { ChatType } from '@pages/ChatPage'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import mateChatService from '@apis/mateChatService'
import { QUERY_KEY } from '@apis/queryClient'
import MateUserCard from '../MateUserCard'

interface ChatBottomModalProps {
  handleAlertClick: () => void
  currentChatType: ChatType
}

const MateModalContent = ({
  handleAlertClick,
  currentChatType,
}: ChatBottomModalProps) => {
  const { isOwner, recruitStatus, setCurrentAlertStatus } = useMateChatStore()
  const { id: chatRoomId } = useParams()

  const {
    data: members,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.MATE_CHAT_MEMBERS, chatRoomId],
    queryFn: () => mateChatService.getMateChatMembers(chatRoomId as string),
  })

  if (!chatRoomId || !members) return null

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
      <Section>
        <h2>대화상대</h2>
        <div>
          {members.map((member) => (
            <MateUserCard
              key={member.memberId}
              member={member}
              handleAlertClick={handleAlertClick}
            />
          ))}
        </div>
      </Section>

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
