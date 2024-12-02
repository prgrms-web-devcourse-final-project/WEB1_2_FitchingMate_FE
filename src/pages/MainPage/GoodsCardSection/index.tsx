import { useQuery } from '@tanstack/react-query'
import GoodsCard from '@components/GoodsCard'
import { GoodsCardContainer, CardWrapper, MoreSection } from './style'
import { kboTeamInfo } from '@constants/kboInfo'
import { Link } from 'react-router-dom'
import { QUERY_KEY } from '@apis/queryClient'
import fetchApi from '@apis/ky'
import { GoodsPostSummary } from '@typings/db'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

interface GoodsCardSectionProps {
  selectedTeam: string
}

const fetchGoodsCards = async (
  teamId: number | null,
): Promise<GoodsPostSummary[]> => {
  const endpoint =
    teamId === null ? 'goods/main' : `goods/main?teamId=${teamId}`
  const response = await fetchApi
    .get(endpoint)
    .json<{ data: GoodsPostSummary[] }>()
  return response.data
}

const GoodsCardSection = ({ selectedTeam }: GoodsCardSectionProps) => {
  const teamId = selectedTeam === '전체' ? null : kboTeamInfo[selectedTeam]?.id

  const {
    data: goodsCards = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEY.GOODS_LIST, teamId],
    queryFn: () => fetchGoodsCards(teamId),
    enabled: !!teamId || selectedTeam === '전체',
  })

  const teamName = kboTeamInfo[selectedTeam]?.team || 'KBO'

  if (isLoading) {
    return (
      <GoodsCardContainer>
        <p>로딩 중...</p>
      </GoodsCardContainer>
    )
  }

  if (isError || goodsCards.length === 0) {
    return (
      <GoodsCardContainer>
        <h3>{`${teamName} 굿즈 거래하기`}</h3>
        <p className='no-goods'>{`${teamName} 굿즈를 찾을 수 없습니다.`}  </p>
        <MoreSection>
          <Link className='more' to={ROUTE_PATH.GOODS_LIST}>더보기</Link>
        </MoreSection>
      </GoodsCardContainer>
    )
  }

  return (
    <GoodsCardContainer>
      <h3>{`${teamName} 상품 찾기`}</h3>
      <CardWrapper>
        {goodsCards.map((card) => (
          <GoodsCard
            key={card.id}
            card={card}
          />
        ))}
      </CardWrapper>
      <MoreSection>
        <Link className='more' to={ROUTE_PATH.GOODS_LIST}>더보기</Link>
      </MoreSection>
    </GoodsCardContainer>
  )
}

export default GoodsCardSection
