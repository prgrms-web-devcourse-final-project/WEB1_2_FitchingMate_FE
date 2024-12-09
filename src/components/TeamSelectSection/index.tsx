import React, { useEffect, useRef } from 'react'
import { TeamSelectContainer, Card } from './style'
import { kboTeamList, kboTeamInfo } from '@constants/kboInfo'
import KboWhiteLogo from '@assets/teamLogo/KBO_logo_white.svg?react'

interface TeamSelectSectionProps {
  selectedTeam: number
  onSelectTeam: (team: number) => void
}

const KBO_NUMBER = 0

const TeamSelectSection = ({
  selectedTeam,
  onSelectTeam,
}: TeamSelectSectionProps) => {
  const [kbo, ...restTeamList] = kboTeamList
  const KboLogo = kboTeamInfo[kbo.team].logo

  const teamRefs = useRef<Map<number, HTMLDivElement | null>>(new Map())

  const handleTeamChange = (team: number) => {
    onSelectTeam(team)
  }

  useEffect(() => {
    const selectedRef = teamRefs.current.get(selectedTeam)
    if (selectedRef) {
      selectedRef.scrollIntoView({
        // behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }, [selectedTeam])

  return (
    <TeamSelectContainer>
      <Card
        ref={(el) => teamRefs.current.set(KBO_NUMBER, el)}
        onClick={() => handleTeamChange(KBO_NUMBER)}
        $isSelected={selectedTeam === KBO_NUMBER}
      >
        {selectedTeam === KBO_NUMBER ? (
          <KboWhiteLogo
            width={50}
            height={50}
          />
        ) : (
          <KboLogo
            width={50}
            height={50}
          />
        )}
      </Card>

      {restTeamList.map((team) => (
        <TeamCard
          key={team.id}
          ref={(el) => teamRefs.current.set(team.id, el)}
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

const TeamCard = React.forwardRef<HTMLDivElement, TeamCardProps>(
  ({ teamInfo, currentTeam, onHandleTeamChange }, ref) => {
    const { team } = teamInfo
    const Logo = kboTeamInfo[team].logo
    const isSelected = currentTeam === teamInfo.id

    return (
      <Card
        ref={ref}
        onClick={() => onHandleTeamChange(teamInfo.id)}
        $isSelected={isSelected}
      >
        <Logo
          width={50}
          height={50}
        />
      </Card>
    )
  },
)

export default TeamSelectSection
