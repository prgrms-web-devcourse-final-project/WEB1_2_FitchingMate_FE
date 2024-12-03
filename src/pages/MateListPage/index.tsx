import TeamSelectSection from '@components/TeamSelectSection'
import {
  FilterModalButton,
  FilterSelectOptionWrap,
  FilterWrap,
  TeamSelectWrap,
} from './style'

import PillButton from '@components/PillButton'
import BottomModal from '@components/BottomModal'
import useTeamDialog from '@hooks/useTeamDialog'
import MateFilterOptions from './MateFilterOptions'
import MateCard from '@components/MateCard'

import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import FloatButton from '@components/FloatButton'

const MateListPage = () => {
  const { bottomModalRef, handleClickSelectButton } = useTeamDialog()

  return (
    <section>
      <TeamSelectWrap>
        <TeamSelectSection />
      </TeamSelectWrap>
      <FilterWrap>
        <FilterModalButton>
          <PillButton
            text='필터'
            onClick={handleClickSelectButton}
          />
        </FilterModalButton>
        <FilterSelectOptionWrap>
          <p>20대</p>
          <p>남자</p>
        </FilterSelectOptionWrap>
      </FilterWrap>
      <div>
        <MateCard
          card={{
            imageUrl: 'string',
            title: 'string',
            status: '모집중',
            myTeamName: 'string',
            rivalTeamName: 'string',
            matchTime: '2024-12-03T14:56:25.941Z',
            location: 'string',
            maxParticipants: 0,
            age: '상관없음',
            gender: '상관없음',
            transportType: '상관없음',
            postId: 0,
          }}
        />
      </div>

      <FloatButton path={ROUTE_PATH.MATE_POSTING} />
      <BottomModal ref={bottomModalRef}>
        <MateFilterOptions />
      </BottomModal>
    </section>
  )
}

export default MateListPage
