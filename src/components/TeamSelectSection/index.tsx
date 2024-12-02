import { TeamSelectContainer, Card } from './style';
import { kboTeamList, kboTeamInfo } from '@constants/kboInfo';

interface TeamSelectSectionProps {
  selectedTeam: string;
  setSelectedTeam: (team: string) => void;
}

const TeamSelectSection = ({ selectedTeam, setSelectedTeam }: TeamSelectSectionProps) => {
  return (
    <TeamSelectContainer>
      {kboTeamList.map(({ team }) => (
        <TeamCard
          key={team}
          team={team}
          isSelected={selectedTeam === team}
          onClick={() => setSelectedTeam(team)}
        />
      ))}
    </TeamSelectContainer>
  );
};

interface TeamCardProps {
  team: string;
  isSelected: boolean;
  onClick: () => void;
}

const TeamCard = ({ team, isSelected, onClick }: TeamCardProps) => {
  const TeamLogo = kboTeamInfo[team].logo;

  return (
    <Card onClick={onClick} $isSelected={isSelected}>
      <TeamLogo width={50} height={50} />
    </Card>
  );
};

export default TeamSelectSection;
