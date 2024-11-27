import React from 'react';
import { ResultSummaryContainer, TeamInfo, GameStats } from './style';
import { kboTeamInfo } from '@utils/kboInfo';

interface ResultSummaryProps {
  teamKey: string; // 팀 이름 키
}

const ResultSummary: React.FC<ResultSummaryProps> = ({ teamKey }) => {
  const teamInfo = kboTeamInfo[teamKey]; // 팀 정보 가져오기

  return (
    <ResultSummaryContainer teamKey={teamKey}>
      <TeamInfo>
        <teamInfo.logo className="logo" /> {/* 팀 로고 */}
        <div className="team-name">{teamInfo.team}</div>
      </TeamInfo>
      <GameStats>
        <span className="total-games">144 / 144 경기</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="win-draw-loss">61 승 2무 81패</span>
      </GameStats>
    </ResultSummaryContainer>
  );
};

export default ResultSummary;
