import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import fetchApi from '@apis/ky'
import { QUERY_KEY } from '@apis/queryClient'
import { kboTeamInfo } from '@constants/kboInfo'
import MateCard from '@components/MateCard'
import { MateCardContainer, MoreSection } from './style'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { MateCardData, MateCardResponse } from '@typings/db'

interface MateCardSectionProps {
  selectedTeam: string
}

const fetchMateCards = async (
  teamId: number | null,
): Promise<MateCardData[]> => {
  const endpoint =
    teamId === null ? 'mates/main' : `mates/main?teamId=${teamId}`
  const response: MateCardResponse = await fetchApi.get(endpoint).json()
  console.log(
    '메이트 카드 데이터:',
    `${import.meta.env.VITE_API_ENDPOINT}${endpoint}`,
    response,
  )
  return response.data
}

const MateCardSection = ({ selectedTeam }: MateCardSectionProps) => {
  const teamId = selectedTeam === '전체' ? null : kboTeamInfo[selectedTeam]?.id

  const { data: mateCards = [], isLoading } = useQuery({
    queryKey: [QUERY_KEY.MATE_POST, teamId],
    queryFn: () => fetchMateCards(teamId),
    enabled: !!teamId || selectedTeam === '전체',
  })

  const teamName = kboTeamInfo[selectedTeam]?.team || 'KBO'

  if (isLoading) {
    return <div>로딩 중...</div>
  }

  if (mateCards.length === 0) {
    return (
      <MateCardContainer>
        <h3>{`${teamName} 메이트 찾기`}</h3>
        <p className='no-mate'>
          현재 조회 가능한 {teamName}의 메이트 모집글이 없습니다.
        </p>

        <MoreSection>
          <Link
            className='more'
            to={ROUTE_PATH.MATE_LIST}
          >
            더보기
          </Link>
        </MoreSection>
      </MateCardContainer>
    )
  }

  return (
    <MateCardContainer>
      <h3>{`${teamName} 메이트 찾기`}</h3>
      {mateCards.map((card) => (
        <Link
          key={card.postId}
          to={`${ROUTE_PATH.MATE_DETAIL}/${card.postId}`}
        >
          <MateCard
            key={card.postId}
            card={card}
          />
        </Link>
      ))}
      <MoreSection>
        <Link
          className='more'
          to={ROUTE_PATH.MATE_LIST}
        >
          더보기
        </Link>
      </MoreSection>
    </MateCardContainer>
  )
}

export default MateCardSection
