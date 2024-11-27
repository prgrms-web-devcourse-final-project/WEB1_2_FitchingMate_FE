import TeamSelectSection from '@components/TeamSelectSection'
import { FilterWrap, GoodsCardWrap, TeamSelectWrap } from './style'
import PillButtonList from '@components/PillButtonList'
import GoodsCard from '@components/GoodsCard'

const GoodsListPage = () => {
  return (
    <section>
      <TeamSelectWrap>
        <TeamSelectSection />
      </TeamSelectWrap>
      <FilterWrap>
        <PillButtonList
          buttons={[
            { text: '전체', id: '전체', disabled: false },
            { text: '유니폼', id: '유니폼', disabled: false },
            { text: '모자', id: '모자', disabled: false },
            { text: '의류', id: '의류', disabled: false },
            { text: '잡화', id: '잡화', disabled: false },
            { text: '기념상품', id: '기념상품', disabled: false },
          ]}
          mode='radio'
        />
      </FilterWrap>
      <GoodsCardWrap>
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
        <GoodsCard />
      </GoodsCardWrap>
    </section>
  )
}

export default GoodsListPage
