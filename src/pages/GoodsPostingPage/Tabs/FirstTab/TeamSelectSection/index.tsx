import {
  QuestionSection,
  SelectButton,
} from '@pages/MatePostingPage/Tabs/FirstTab/style'

import CategorySection from '../CategorySection'

import DownIcon from '@assets/icon/down.svg?react'
import { useGoodsFormStore } from '@store/useGoodsFormStore'
import { kboTeamList } from '@constants/kboInfo'

interface TeamSelectSectionProps {
  onSelectButton: () => void
}

const TeamSelectSection = ({ onSelectButton }: TeamSelectSectionProps) => {
  const {
    goods: { teamId },
  } = useGoodsFormStore()

  const selectedTeam = kboTeamList.find((team) => team.id === teamId)?.team

  return (
    <>
      <QuestionSection>
        <label htmlFor='teamId'>굿즈팀 선택</label>
        <SelectButton onClick={onSelectButton}>
          <p>{selectedTeam || '팀 선택'}</p>
          <DownIcon />
        </SelectButton>
        <CategorySection />
      </QuestionSection>
    </>
  )
}

export default TeamSelectSection
