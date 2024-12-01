import TeamSelectSection from '@components/TeamSelectSection'
import { FilterWrap, GoodsCardWrap, TeamSelectWrap } from './style'
import PillButtonList from '@components/PillButtonList'
import GoodsCard from '@components/GoodsCard'
import goodsService from '@apis/goodsService'
import { useEffect, useState } from 'react'
import { FilterButtonList } from './constants'
import { content } from './mockData'
import { useQuery } from '@tanstack/react-query'

const GoodsListPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('1')

  const { data } = useQuery({
    queryKey: ['goods-list'],
    queryFn: () => goodsService.getGoodsList(),
  })

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
        {content.map((goodsData) => {
          return (
            <GoodsCard
              key={goodsData.id}
              imgSrc={goodsData.imageUrl}
              title={goodsData.title}
              teamName={goodsData.teamName}
              category={goodsData.category}
              price={goodsData.price}
            />
          )
        })}
      </GoodsCardWrap>
    </section>
  )
}

export default GoodsListPage
