import TeamSelectSection from '@components/TeamSelectSection'
import { FilterWrap, GoodsCardWrap, TeamSelectWrap } from './style'
import PillButtonList from '@components/PillButtonList'
import GoodsCard from '@components/GoodsCard'
import goodsService from '@apis/goodsService'
import { useEffect, useState } from 'react'
import { FilterButtonList } from './constants'
import { content } from './mockData'

const GoodsListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('1')

  return (
    <section>
      <TeamSelectWrap>
        <TeamSelectSection />
      </TeamSelectWrap>
      <FilterWrap>
        <PillButtonList
          buttons={FilterButtonList}
          defaultSelected={selectedCategory}
          mode='tab'
          onSelect={(id) => setSelectedCategory(id)}
        />
      </FilterWrap>
      <GoodsCardWrap>
        {content.map((data) => {
          return (
            <GoodsCard
              key={data.id}
              imgSrc={data.imageUrl}
              title={data.title}
              teamName={data.teamName}
              category={data.category}
              price={data.price}
            />
          )
        })}
      </GoodsCardWrap>
    </section>
  )
}

export default GoodsListPage
