import useTeamDialog from '@hooks/useTeamDialog'
import {
  QuestionSection,
  SelectButton,
} from '@pages/MatePostingPage/Tabs/FirstTab/style'

import CategorySection from '../CategorySection'

import DownIcon from '@assets/icon/down.svg?react'
import BottomModal from '@components/BottomModal'
import BottomModalOption from '@pages/MatePostingPage/Tabs/FirstTab/BottomModalOption'

const TeamSelectSection = () => {
  const {
    selectedTeam,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  } = useTeamDialog()

  return (
    <>
      <QuestionSection>
        <label htmlFor='teamId'>굿즈팀 선택</label>
        <SelectButton onClick={handleClickSelectButton}>
          <p>{selectedTeam || '팀 선택'}</p>
          <DownIcon />
        </SelectButton>
        <CategorySection />
      </QuestionSection>

      {/* 응원팀 선택 모달 */}
      <BottomModal ref={bottomModalRef}>
        <BottomModalOption onCloseBottomModal={handleTeamSelect} />
      </BottomModal>
    </>
  )
}

export default TeamSelectSection
