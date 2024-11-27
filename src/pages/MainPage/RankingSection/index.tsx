import React from 'react';
import { RankingContainer, RankingTable, TeamCell, TeamLogo, TeamName } from './style';
import { kboTeamInfo } from '@utils/kboInfo';


const rankingData = [
  { rank: 1, team: 'KIA', games: 144, wins: 87, draws: 2, losses: 55, gamesBehind: 0.0 },
  { rank: 2, team: '삼성', games: 144, wins: 78, draws: 2, losses: 64, gamesBehind: 9.0 },
  { rank: 3, team: 'LG', games: 144, wins: 76, draws: 2, losses: 66, gamesBehind: 11.0 },
  { rank: 4, team: '두산', games: 144, wins: 74, draws: 2, losses: 68, gamesBehind: 13.0 },
  { rank: 5, team: 'KT', games: 144, wins: 72, draws: 2, losses: 70, gamesBehind: 15.0 },
  { rank: 6, team: 'SSG', games: 144, wins: 72, draws: 2, losses: 70, gamesBehind: 15.0 },
  { rank: 7, team: '롯데', games: 144, wins: 66, draws: 4, losses: 74, gamesBehind: 20.0 },
  { rank: 8, team: '한화', games: 144, wins: 66, draws: 4, losses: 74, gamesBehind: 21.0 },
  { rank: 9, team: 'NC', games: 144, wins: 61, draws: 2, losses: 86, gamesBehind: 26.0 },
  { rank: 10, team: '키움', games: 144, wins: 58, draws: 0, losses: 86, gamesBehind: 30.0 },
];

const RankingSection = () => {
  return (
    <RankingContainer>
      <h3>2024<br/>KBO 리그 순위</h3>
      <RankingTable>
        <thead>
          <tr >
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
          {rankingData.map(({ rank, team, games, wins, draws, losses, gamesBehind }) => (
            <tr key={rank}>
              <td className='rank'>{rank}</td>
              <td className='team'>
              <TeamCell>
                <TeamLogo>{React.createElement(kboTeamInfo[team].logo)}</TeamLogo>
                <TeamName>{team}</TeamName>
              </TeamCell>
              </td>
              <td className='games'>{games}</td>
              <td className='wins'>{wins}</td>
              <td className='draws'>{draws}</td>
              <td className='losses'>{losses}</td>
              <td className='gamesBehind'>{gamesBehind.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </RankingTable>
    </RankingContainer>
  );
};

export default RankingSection;
