import { useRef, useState } from 'react';
import * as TeamStyle from './style';
import { theme } from '@styles/theme';
import DownIcon from '@assets/icon/down.svg?react';

interface Team {
  teamId?: number; // 팀 선택 안했을 때는 없을 수도 있음
  name: string; // 팀 이름
  color: string; // 팀 색상
}

export const TEAM_LIST: Team[] = [
  { teamId: 1, name: 'KIA', color: theme.teams.kia },
  { teamId: 2, name: 'LG', color: theme.teams.lg },
  { teamId: 3, name: 'NC', color: theme.teams.nc },
  { teamId: 4, name: 'SSG', color: theme.teams.ssg },
  { teamId: 5, name: 'KT', color: theme.teams.kt },
  { teamId: 6, name: '두산', color: theme.teams.doosan },
  { teamId: 7, name: '롯데', color: theme.teams.lotte },
  { teamId: 8, name: '삼성', color: theme.teams.samsung },
  { teamId: 9, name: '키움', color: theme.teams.kiwoom },
  { teamId: 10, name: '한화', color: theme.teams.hanwha },
];

interface TeamSelectModalProps {
  onTeamSelect?: (team: { teamId?: number; name: string }) => void;
}

export default function TeamSelectModal({ onTeamSelect }: TeamSelectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedTeam, setSelectedTeam] = useState<string>('팀 선택'); // 선택된 팀 상태

  const openModal = () => {
    dialogRef.current?.showModal(); // 모달 열기
  };

  const closeModal = () => {
    dialogRef.current?.close(); // 모달 닫기
  };

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team.name); // 선택된 팀 상태 업데이트
    if (onTeamSelect) {
      onTeamSelect(team)
    }
    closeModal(); // 모달 닫기
  };

  return (
    <div>
      {/* 선택된 팀 이름 표시 */}
      <TeamStyle.TeamSelectButton onClick={openModal} type="button">
        {selectedTeam}
        <DownIcon />
      </TeamStyle.TeamSelectButton>

      <TeamStyle.TeamDialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            closeModal(); // 백드롭 클릭 시 닫기
          }
        }}
      >
        <h2>마이팀 선택</h2>
        <TeamStyle.AllButton
          type="button"
          onClick={() => handleTeamSelect({ teamId: undefined, name: '전체', color: '' })}
        >
          전체
        </TeamStyle.AllButton>
        <TeamStyle.TeamList>
          {TEAM_LIST.map((team) => (
            <TeamStyle.TeamButton
              type="button"
              data-teamid={team.teamId}
              key={team.name}
              color={team.color}
              onClick={() => handleTeamSelect(team)} // 클릭 시 팀 선택
            >
              {team.name}
            </TeamStyle.TeamButton>
          ))}
        </TeamStyle.TeamList>
      </TeamStyle.TeamDialog>
    </div>
  );
}
