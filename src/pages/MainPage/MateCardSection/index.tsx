import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import fetchApi from '@apis/ky'
import { QUERY_KEY } from '@apis/queryClient'
import { kboTeamList } from '@constants/kboInfo'
import { MateCardContainer, MoreSection } from './style'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { MateCardData, MateCardResponse } from '@typings/db'
import MainMateCard from '@components/MainMateCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { theme } from '@styles/theme'

interface MateCardSectionProps {
  selectedTeam: number
}

const fetchMateCards = async (teamId: number): Promise<MateCardData[]> => {
  const endpoint = teamId === 0 ? 'mates/main' : `mates/main?teamId=${teamId}`
  const response: MateCardResponse = await fetchApi.get(endpoint).json()
  return response.data
}

const MateCardSection = ({ selectedTeam }: MateCardSectionProps) => {
  const teamId = selectedTeam === 0 ? 0 : kboTeamList[selectedTeam].id

  const { data: mateCards = [], isLoading } = useQuery({
    queryKey: [QUERY_KEY.MATE_POST, teamId],
    queryFn: () => fetchMateCards(teamId),
    enabled: !!teamId || selectedTeam === 0,
  })

  const teamName = kboTeamList[selectedTeam]?.team || 'KBO'

  if (isLoading) {
    return (
      <MateCardContainer>
        <Skeleton
          width='100%'
          height='9em'
          borderRadius='0'
          baseColor={theme.border}
          highlightColor={theme.fontColor.navy}
          style={{ marginBottom: '0.5rem' }}
        />
        <Skeleton
          width='100%'
          height='9em'
          borderRadius='0'
          baseColor={theme.border}
          highlightColor={theme.fontColor.navy}
          style={{ marginBottom: '0.5rem' }}
        />
        <Skeleton
          width='100%'
          height='9em'
          borderRadius='0'
          baseColor={theme.border}
          highlightColor={theme.fontColor.navy}
          style={{ marginBottom: '0.5rem' }}
        />
      </MateCardContainer>
    )
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
        <MainMateCard
          key={card.postId}
          card={card}
        />
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
