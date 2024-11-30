import React from 'react'
import { TeamSelectContainer, Card } from './style'
import { kboTeamList, kboTeamInfo } from '@constants/kboInfo'

interface TeamSelectSectionProps {
  selectedTeam: string
  setSelectedTeam: (team: string) => void
}

const TeamSelectSection = ({ selectedTeam, setSelectedTeam }: TeamSelectSectionProps) => {
  return (
    <TeamSelectContainer>
      {kboTeamList.map((team) => (
        <Card
          key={team}
          onClick={() => setSelectedTeam(team)}
          $isselected={selectedTeam === team}
        >
          {React.createElement(kboTeamInfo[team].logo, {
            width: 50,
            height: 50
          })}
        </Card>
      ))}
    </TeamSelectContainer>
  )
}

export default TeamSelectSection
