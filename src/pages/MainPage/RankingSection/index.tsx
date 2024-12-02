import { useQuery } from '@tanstack/react-query';
import {
  RankingContainer,
  RankingTable,
  TeamCell,
  TeamLogo,
  TeamName,
} from './style';
import { kboTeamInfo } from '@constants/kboInfo';
import fetchApi from '@apis/ky';
import { QUERY_KEY } from '@apis/queryClient';
import { TeamRanking } from '@typings/db';
import { formatTeamName } from '@utils/formatTeamName';

const fetchTeamRankings = async (): Promise<TeamRanking[]> => {
  const response = await fetchApi.get('teams/rankings').json<{
    status: string;
    data: TeamRanking[];
  }>();

  if (response.status !== 'SUCCESS') {
    throw new Error('데이터를 불러오지 못했습니다.');
  }

  return response.data;
};

const RankingSection = () => {
  const currentYear = new Date().getFullYear();

  const { data: rankings = [], isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY.RANKINGS],
    queryFn: fetchTeamRankings,
    staleTime: 60000, // 1분 동안 데이터 재검증하지 않음
  });

  if (isLoading) {
    return <RankingContainer>로딩 중...</RankingContainer>;
  }

  if (isError) {
    return <RankingContainer><p className='error'>데이터를 불러오는 중 문제가 발생했습니다.</p></RankingContainer>;
  }

  if (!rankings.length) {
    return <RankingContainer><p className='error'>순위 데이터를 찾을 수 없습니다.</p></RankingContainer>;
  }

  return (
    <RankingContainer>
      <h3>
        {currentYear}
        <br />
        KBO 리그 순위
      </h3>
      <RankingTable>
        <thead>
          <tr>
            <th>순위</th>
            <th>팀</th>
            <th>경기</th>
            <th>승</th>
            <th>무</th>
            <th>패</th>
            <th>게임차</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map(
            ({
              id,
              teamName,
              rank,
              gamesPlayed,
              wins,
              draws,
              losses,
              gamesBehind,
            }) => {
              const formattedTeamName = formatTeamName(teamName); // 팀 이름 포맷
              const TeamLogoComponent = kboTeamInfo[formattedTeamName]?.logo;

              return (
                <tr key={id}>
                  <td className="rank">{rank}</td>
                  <td className="team">
                    <TeamCell>
                      <TeamLogo>
                        {TeamLogoComponent && <TeamLogoComponent />}
                      </TeamLogo>
                      <TeamName>{teamName}</TeamName>
                    </TeamCell>
                  </td>
                  <td className="games">{gamesPlayed}</td>
                  <td className="wins">{wins}</td>
                  <td className="draws">{draws}</td>
                  <td className="losses">{losses}</td>
                  <td className="gamesBehind">{gamesBehind.toFixed(1)}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </RankingTable>
    </RankingContainer>
  );
};

export default RankingSection;
