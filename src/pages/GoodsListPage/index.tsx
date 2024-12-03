import TeamSelectSection from '@components/TeamSelectSection'
import { FilterWrap, GoodsCardWrap, TeamSelectWrap } from './style'
import GoodsCard from '@components/GoodsCard'
import goodsService from '@apis/goodsService'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import FloatButton from '@components/FloatButton'
import { QUERY_KEY } from '@apis/queryClient'
import PillButton from '@components/PillButton'

const CATEGORY_LIST = ['전체', '유니폼', '모자', '의류', '잡화', '기념상품']

const GoodsListPage = () => {
  const [selectedTeam, setSelectedTeam] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY.GOODS_LIST, selectedTeam, selectedCategory],
    queryFn: () => goodsService.getGoodsList(selectedTeam, selectedCategory),
  })

  return (
    <section>
      <TeamSelectWrap>
        <TeamSelectSection
          selectedTeam={selectedTeam}
          onSelectTeam={setSelectedTeam}
        />
      </TeamSelectWrap>
      <FilterWrap>
        {CATEGORY_LIST.map((category) => (
          <PillButton
            key={category}
            text={category}
            $isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </FilterWrap>
      <GoodsCardWrap>
        {data?.content.map(
          ({ id, imageUrl, title, teamName, category, price }) => (
            <GoodsCard
              key={id}
              id={id}
              imgSrc={imageUrl}
              title={title}
              teamName={teamName}
              category={category}
              price={price}
            />
          ),
        )}
      </GoodsCardWrap>
      <FloatButton path={ROUTE_PATH.GOODS_POSTING} />
    </section>
  )
}

export default GoodsListPage
