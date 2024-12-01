import { useEffect, useState } from 'react';
import {
  RankingContainer,
  RankingTable,
  TeamCell,
  TeamLogo,
  TeamName,
} from './style';
import { kboTeamInfo } from '@constants/kboInfo';
import fetchApi from '@apis/ky';

interface TeamRanking {
  id: number;
  teamName: string;
  rank: number;
  gamesPlayed: number;
  totalGames: number;
  wins: number;
  draws: number;
  losses: number;
  gamesBehind: number;
}

const RankingSection = () => {
  const [rankings, setRankings] = useState<TeamRanking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        setLoading(true);
        const response = await fetchApi.get('teams/rankings').json<{
          status: string;
          data: TeamRanking[];
        }>();

        console.log('API Response:', response);

        if (response.status === 'SUCCESS') {
          setRankings(response.data); // 데이터 상태 업데이트
        } else {
          throw new Error('데이터를 불러오지 못했습니다.');
        }
      } catch (err: any) {
        setError(err.message || '알 수 없는 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  if (loading) {
    return <RankingContainer>로딩 중...</RankingContainer>;
  }

  if (error) {
    return <RankingContainer>에러: {error}</RankingContainer>;
  }

  if (!rankings.length) {
    return <RankingContainer>순위 데이터를 찾을 수 없습니다.</RankingContainer>;
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
              const TeamLogoComponent = kboTeamInfo[teamName]?.logo;
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
