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
  const [selectedTeam, setSelectedTeam] = useState<number>(kboTeamList[0].id)

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
