import { QuestionSection, SelectButton } from './style'

import DownIcon from '@assets/icon/down.svg?react'

import BottomModal from '@components/BottomModal'
import BottomModalOption from './BottomModalOption'
import GameButtonList from './GameButtonList'
import useTeamDialog from '@hooks/useTeamDialog'
import { useMatePostStore } from '@store/useMatePostStore'

const FirstTab = () => {
  const {
    selectedTeam,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  } = useTeamDialog()

  const setTeamId = useMatePostStore((state) => state.setTemaId)

  return (
    <>
      <QuestionSection>
        {/* 응원팀 선택 */}
        <label htmlFor='team'>응원팀 선택</label>
        <SelectButton onClick={handleClickSelectButton}>
          <p>{selectedTeam || '팀 선택'}</p>
          <DownIcon />
        </SelectButton>
      </QuestionSection>

      {/* 다가오는 경기 목록 */}
      <GameButtonList currentTeam={selectedTeam} />

      {/* 응원팀 선택 모달 */}
      <BottomModal ref={bottomModalRef}>
        <BottomModalOption
          onClose={handleTeamSelect}
          callback={setTeamId}
        />
      </BottomModal>
    </>
  )
}

export default FirstTab
