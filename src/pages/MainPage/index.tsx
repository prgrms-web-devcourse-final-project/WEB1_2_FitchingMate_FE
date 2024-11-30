import { useState } from 'react'
import { MainPageContainer, TeamSelectWrapper } from './style'
import TeamSelectSection from '@components/TeamSelectSection'
import MatchUpSection from './MatchUpSection'
import MateCardSection from './MateCardSection'
import GoodsCardSection from './GoodsCardSection'

const MainPage = () => {
  const [selectedTeam, setSelectedTeam] = useState('전체') // 초기값은 '전체'

  return (
    <MainPageContainer>
      <MatchUpSection />
      <TeamSelectWrapper>
        <TeamSelectSection selectedTeam={selectedTeam} setSelectedTeam={setSelectedTeam} />
      </TeamSelectWrapper>
      <MateCardSection selectedTeam={selectedTeam} />
      <GoodsCardSection selectedTeam={selectedTeam} />
    </MainPageContainer>
  )
}

export default MainPage
