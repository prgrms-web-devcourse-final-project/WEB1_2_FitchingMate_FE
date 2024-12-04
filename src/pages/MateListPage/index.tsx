import TeamSelectSection from '@components/TeamSelectSection'
import {
  FilterModalButton,
  FilterSelectOptionWrap,
  FilterWrap,
  TeamSelectWrap,
} from './style'

import PillButton from '@components/PillButton'
import BottomModal from '@components/BottomModal'
import MateFilterOptions from './MateFilterOptions'

import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import FloatButton from '@components/FloatButton'
import { useModal } from '@hooks/useModal'

const MateListPage = () => {
  const { bottomModalRef, handleOpenBottomModal } = useModal()

  return (
    <section>
      <TeamSelectWrap>
        <TeamSelectSection />
      </TeamSelectWrap>
      <FilterWrap>
        <FilterModalButton>
          <PillButton
            text='필터'
            onClick={handleOpenBottomModal}
          />
        </FilterModalButton>
        <FilterSelectOptionWrap>
          <p>20대</p>
          <p>남자</p>
        </FilterSelectOptionWrap>
      </FilterWrap>
      <div>
        {/* <MateCard />
        <MateCard />
        <MateCard />
        <MateCard />
        <MateCard />
        <MateCard />
        <MateCard />
        <MateCard /> */}
      </div>

      <FloatButton path={ROUTE_PATH.MATE_POSTING} />
      <BottomModal ref={bottomModalRef}>
        <MateFilterOptions />
      </BottomModal>
    </section>
  )
}

export default MateListPage
