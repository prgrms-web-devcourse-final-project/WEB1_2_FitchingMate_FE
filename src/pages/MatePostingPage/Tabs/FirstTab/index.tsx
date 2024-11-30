import { QuestionSection, SelectButton } from './style'

import DownIcon from '@assets/icon/down.svg?react'

import BottomModal from '@components/BottomModal'
import BottomModalOption from './BottomModalOption'
import GameButtonList from './GameButtonList'

import { useMateFormStore } from '@store/useMateFormStore'
import { useModal } from '@hooks/useModal'
import { kboTeamList } from '@constants/kboInfo'

const FirstTab = () => {
  const { bottomModalRef, handleOpenBottomModal, handleCloseBottomModal } =
    useModal()

  const {
    matePost: { teamId },
  } = useMateFormStore()

  const selectedTeam = kboTeamList.find((team) => team.id === teamId)?.team

  return (
    <>
      <QuestionSection>
        {/* 응원팀 선택 */}
        <label htmlFor='team'>응원팀 선택</label>
        <SelectButton onClick={handleOpenBottomModal}>
          <p>{selectedTeam || '팀 선택'}</p>
          <DownIcon />
        </SelectButton>
      </QuestionSection>

      {/* 다가오는 경기 목록 */}
      <GameButtonList />

      {/* 응원팀 선택 모달 */}
      <BottomModal ref={bottomModalRef}>
        <BottomModalOption onCloseBottomModal={handleCloseBottomModal} />
      </BottomModal>
    </>
  )
}

export default FirstTab
