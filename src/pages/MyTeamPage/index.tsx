import { MyTeamPageContainer, TeamSelectWrapper } from './style'
import TeamSelectSection from '@components/TeamSelectSection'
import MatchUpSection from './MatchUpSection'
import MateCardSection from './MateCardSection'
import GoodsCardSection from './GoodsCardSection'
import ResultSection from './ResultSection'
import ScrollToTopButton from '@components/ScrollToTopButton'

const MyTeamPage = () => {
  return (
    <MyTeamPageContainer>
      <MatchUpSection />
      <TeamSelectWrapper>
        <TeamSelectSection />
      </TeamSelectWrapper>
      <MateCardSection />
      <GoodsCardSection />
      <ResultSection />
      <ScrollToTopButton />
    </MyTeamPageContainer>
  )
}

export default MyTeamPage
