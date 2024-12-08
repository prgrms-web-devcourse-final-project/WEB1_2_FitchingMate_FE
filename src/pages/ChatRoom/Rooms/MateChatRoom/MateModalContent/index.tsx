import {
  ChatBottomModalContainer,
  Section,
  SubmitButtonContainer,
} from '@pages/ChatRoom/style'

import { useMateChatStore } from '@store/useMateChatStore'
import RecruitStatusSection from '../RecruitStatusSection'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import mateChatService from '@apis/mateChatService'
import { QUERY_KEY } from '@apis/queryClient'
import MateUserCard from '../MateUserCard'

interface ChatBottomModalProps {
  handleAlertClick: () => void
}

const MateModalContent = ({ handleAlertClick }: ChatBottomModalProps) => {
  /**
   * 메이트 채팅방 상태 관리
   *
   * 채팅방 나가기, 모집 완료 버튼 클릭 시 알림창 띄우기
   */
  const {
    isOwner,
    recruitStatus,
    setCurrentAlertStatus,
    setParticipants,
    setMateChatRoomId,
  } = useMateChatStore()

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
    setMateChatRoomId(chatRoomId)
    handleAlertClick()
  }

  /**
   * 본인 아이디 제외 필요
   * 추후 로그인 기능 추가 시 변경 필요
   */
  const cuurentMemberList = members
    .map((member) => member.memberId)
    .filter((memberId) => memberId !== Number(localStorage.getItem('memberId')))

  /**
   * 각 버튼 클릭 시 현재 알럿창 상태 변경
   * 모집 완료 버튼 클릭 시 알림창 띄우기
   */
  const handleCompleteClick = () => {
    switch (recruitStatus) {
      case '모집완료':
        setCurrentAlertStatus({ type: 'MATE_COMPLETE' })
        break

      case '모집중':
        setCurrentAlertStatus({ type: 'MATE_STATUS_CHANGE' })
        setParticipants(cuurentMemberList)
        break

      case '직관완료':
        setCurrentAlertStatus({ type: 'GAME_COMPLETE' })
        setParticipants(cuurentMemberList)
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
