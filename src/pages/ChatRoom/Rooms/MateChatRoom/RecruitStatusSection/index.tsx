import PillButton from '@components/PillButton'
import { useMateChatStore } from '@store/useMateChatStore'
import { ButtonContainer, Section } from '@pages/ChatRoom/style'

export const RECRUIT_STATUS = ['모집중', '모집완료', '직관완료'] as const

export type RecruitStatus = (typeof RECRUIT_STATUS)[number]

const RecruitStatusSection = () => {
  const { recruitStatus, setRecruitStatus } = useMateChatStore()

  const handleRecruitStatusClick = (status: RecruitStatus) => {
    setRecruitStatus(status)
  }

  return (
    <Section>
      <h2>모집상태 설정</h2>
      <ButtonContainer>
        {RECRUIT_STATUS.map((status) => (
          <PillButton
            key={status}
            text={status}
            $isSelected={recruitStatus === status}
            onClick={() => handleRecruitStatusClick(status)}
          />
        ))}
      </ButtonContainer>
    </Section>
  )
}

export default RecruitStatusSection
