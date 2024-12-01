import { TeamSelectContainer, Card } from './style';
import { kboTeamList, kboTeamInfo } from '@constants/kboInfo';

interface TeamSelectSectionProps {
  selectedTeam: string;
  setSelectedTeam: (team: string) => void;
}

const TeamSelectSection = ({ selectedTeam, setSelectedTeam }: TeamSelectSectionProps) => {
  return (
    <TeamSelectContainer>
      {kboTeamList.map((team) => {
        const TeamLogo = kboTeamInfo[team].logo;
        return (
          <Card
            key={team}
            onClick={() => setSelectedTeam(team)}
            $isSelected={selectedTeam === team}
          >
            <TeamLogo width={50} height={50} />
          </Card>
        );
      })}
    </TeamSelectContainer>
  );
};

export default TeamSelectSection;
