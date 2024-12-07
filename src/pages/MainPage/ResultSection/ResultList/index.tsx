import { useQuery } from '@tanstack/react-query'
import {
  ResultListTable,
  RivalTeam,
  ResultListTitle,
  ErrorContainer,
} from './style'
import { kboTeamInfo, kboTeamList } from '@constants/kboInfo'
import fetchApi from '@apis/ky'
import { QUERY_KEY } from '@apis/queryClient'
import { Match } from '@typings/db'
import { formatTeamName } from '@utils/formatTeamName'

interface ResultListProps {
  teamKey: number // 팀 이름 키
}

const fetchCompletedMatches = async (teamId: number): Promise<Match[]> => {
  const response = await fetchApi.get(`matches/team/${teamId}/completed`).json<{
    status: string
    data: Match[]
  }>()

  if (response.status !== 'SUCCESS') {
    throw new Error('경기 데이터를 불러오는 데 실패했습니다.')
  }

  return response.data
}

const ResultList = ({ teamKey }: ResultListProps) => {
  const teamId = kboTeamList[teamKey]?.id

  const {
    data: gameResults = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEY.COMPLETED_MATCHES, teamId],
    queryFn: () => fetchCompletedMatches(teamId!),
    enabled: !!teamId,
  })

  if (isLoading) {
    return <p>로딩 중...</p>
  }

  if (isError || !gameResults.length) {
    return (
      <ErrorContainer>
        <p className='error'>
          {`${kboTeamList[teamKey]?.team} 경기 전적을 불러올 수 없습니다.`}
        </p>
      </ErrorContainer>
    )
  }

  return (
    <div>
      <ResultListTitle>
        {kboTeamList[teamKey]?.fullName}의 최근 전적
      </ResultListTitle>
      <ResultListTable>
        <thead>
          <tr>
            <th>날짜</th>
            <th>vs</th>
            <th>상대 팀</th>
            <th>결과</th>
            <th>점수</th>
          </tr>
        </thead>
        <tbody>
          {gameResults.map((game) => {
            const rivalTeamName =
              game.homeTeam.teamName === kboTeamList[teamKey]?.fullName
                ? game.awayTeam.teamName
                : game.homeTeam.teamName

            const formattedRivalName = formatTeamName(rivalTeamName)
            const teamInfo = kboTeamInfo[formattedRivalName] || {}

            return (
              <tr key={game.id}>
                <td className='date'>
                  {new Date(game.matchTime).toLocaleDateString('ko-KR')}
                </td>
                <td className='vs'>vs</td>
                <td className='rival-team'>
                  <RivalTeam>
                    {teamInfo.logo ? (
                      <teamInfo.logo className='team-logo' />
                    ) : (
                      <span>로고 없음</span>
                    )}
                    <span className='team-name'>
                      {teamInfo.team || '알 수 없음'}
                    </span>
                  </RivalTeam>
                </td>
                <td
                  className={`result ${
                    game.result === 'WIN'
                      ? 'win'
                      : game.result === 'LOSE'
                        ? 'loss'
                        : 'draw'
                  }`}
                >
                  {game.result === 'WIN'
                    ? '승'
                    : game.result === 'LOSE'
                      ? '패'
                      : '무'}
                </td>
                <td className='score'>{`${game.homeScore}-${game.awayScore}`}</td>
              </tr>
            )
          })}
        </tbody>
      </ResultListTable>
    </div>
  )
}

export default ResultList
