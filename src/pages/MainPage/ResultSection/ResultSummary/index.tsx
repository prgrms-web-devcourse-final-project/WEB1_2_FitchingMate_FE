import { ResultSummaryContainer, TeamInfo, GameStats } from './style'
import { kboTeamList } from '@constants/kboInfo'
import fetchApi from '@apis/ky'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { theme } from '@styles/theme'

interface TeamRankingData {
  rank: number
  gamesPlayed: number
  totalGames: number
  wins: number
  draws: number
  losses: number
  gamesBehind: number
}

const fetchTeamRanking = async (teamId: number): Promise<TeamRankingData> => {
  const response = await fetchApi.get(`teams/rankings/${teamId}`).json<{
    data: TeamRankingData
  }>()
  return response.data
}

interface ResultSummaryProps {
  selectedTeam: number // 팀 아이디 키
}

const ResultSummary = ({ selectedTeam }: ResultSummaryProps) => {
  const teamInfo = kboTeamList[selectedTeam]
  const teamId = teamInfo?.id

  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEY.RANKINGS, teamId],
    queryFn: () => fetchTeamRanking(teamId!),
    enabled: !!teamId,
  })

  if (isLoading) return (
    <Skeleton
        width='100%'
        height='2em'
        borderRadius='0'
        baseColor={theme.border}
        highlightColor={theme.fontColor.navy}
        style={{ marginBottom: '0.5rem' }}
      />
  )
  if (error instanceof Error) return <div>오류: {error.message}</div>

  if (!data) return <div>순위 요약 데이터를 불러오지 못했습니다.</div>

  const { rank, gamesPlayed, totalGames, wins, draws, losses } = data

  return (
    <ResultSummaryContainer $teamId={teamId}>
      <TeamInfo>
        {teamInfo.logo && <teamInfo.logo className='logo' />}
        <div className='team-name'>{teamInfo.team}</div>
        <span>&nbsp;</span>
        <span className='rank'>{rank}위</span>
      </TeamInfo>
      <GameStats>
        <span className='total-games'>
          {gamesPlayed} / {totalGames} 경기
        </span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className='win-draw-loss'>
          {wins}승 {draws}무 {losses}패
        </span>
      </GameStats>
    </ResultSummaryContainer>
  )
}

export default ResultSummary
