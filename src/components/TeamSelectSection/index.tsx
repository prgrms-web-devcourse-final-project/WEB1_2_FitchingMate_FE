import { TeamSelectContainer, Card } from './style'
import { kboTeamList, kboTeamInfo } from '@constants/kboInfo'
import KboWhiteLogo from '@assets/teamLogo/KBO_logo_white.svg?react'

interface TeamSelectSectionProps {
  selectedTeam: number
  onSelectTeam: (team: number) => void
}

const TeamSelectSection = ({
  selectedTeam,
  onSelectTeam,
}: TeamSelectSectionProps) => {
  const handleTeamChange = (team: number) => {
    onSelectTeam(team)
  }

  return (
    <TeamSelectContainer>
      {kboTeamList.map((team) => (
        <TeamCard
          key={team.id}
          teamInfo={team}
          currentTeam={selectedTeam}
          onHandleTeamChange={handleTeamChange}
        />
      ))}
    </TeamSelectContainer>
  )
}

interface TeamCardProps {
  teamInfo: {
    team: string
    id: number
    color: string
  }
  currentTeam: number
  onHandleTeamChange: (team: number) => void
}

const TeamCard = ({
  teamInfo,
  currentTeam,
  onHandleTeamChange,
}: TeamCardProps) => {
  const { team } = teamInfo

  const Logo = kboTeamInfo[team].logo
  const isSelected = currentTeam === teamInfo.id

  return (
    <Card
      onClick={() => onHandleTeamChange(teamInfo.id)}
      $isselected={isSelected}
    >
      <Logo
        width={50}
        height={50}
      />
    </Card>
  )
}

export default TeamSelectSection
