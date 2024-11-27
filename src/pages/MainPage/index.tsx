import { MainPageContainer, TeamSelectWrapper } from './style'
import TeamSelectSection from '@components/TeamSelectSection'
import MatchUpSection from './MatchUpSection'
import MateCardSection from './MateCardSection'
import GoodsCardSection from './GoodsCardSection'
import RankingSection from './RankingSection'

const MainPage = () => {
  return (
    <MainPageContainer>
      <MatchUpSection />
      <TeamSelectWrapper>
      <TeamSelectSection />
      </TeamSelectWrapper>
      <MateCardSection />
      <GoodsCardSection />
      <RankingSection />
    </MainPageContainer>
  )
}

export default MainPage
