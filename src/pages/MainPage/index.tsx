import { useState } from 'react'
import { MainPageContainer, TeamSelectWrapper } from './style'
import MatchUpSection from './MatchUpSection'
import MateCardSection from './MateCardSection'
import GoodsCardSection from './GoodsCardSection'
import RankingSection from './RankingSection'
import ResultSection from './ResultSection'
import TeamSelectSection from '@components/TeamSelectSection'
import { kboTeamList } from '@constants/kboInfo'

const MainPage = () => {
  const initialTeam = () => {
    const token = localStorage.getItem('token')
    const teamId = localStorage.getItem('teamId')
    return token && teamId ? Number(teamId) : kboTeamList[0].id
  }

  const [selectedTeam, setSelectedTeam] = useState<number>(initialTeam)

  const handleTeamSelect = (team: number) => {
    setSelectedTeam(team)
  }

  return (
    <MainPageContainer>
      <MatchUpSection selectedTeam={selectedTeam} />

      <TeamSelectWrapper>
        <TeamSelectSection
          selectedTeam={selectedTeam}
          onSelectTeam={handleTeamSelect}
        />
      </TeamSelectWrapper>

      <MateCardSection selectedTeam={selectedTeam} />

      <GoodsCardSection selectedTeam={selectedTeam} />

      {selectedTeam === 0 ? (
        <RankingSection />
      ) : (
        <ResultSection selectedTeam={selectedTeam} />
      )}
    </MainPageContainer>
  )
}

export default MainPage
