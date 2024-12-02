import { useState } from 'react';
import { MainPageContainer, TeamSelectWrapper } from './style';
import MatchUpSection from './MatchUpSection';
import TeamSelectSection from '@components/TeamSelectSection';
import MateCardSection from './MateCardSection';
import GoodsCardSection from './GoodsCardSection';
import RankingSection from './RankingSection';
import ResultSection from './ResultSection';
import { kboTeamList } from '@constants/kboInfo';

const MainPage = () => {
  const [selectedTeam, setSelectedTeam] = useState<string>(kboTeamList[0].team);

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
  };

  return (
    <MainPageContainer>
      <MatchUpSection selectedTeam={selectedTeam} />

      <TeamSelectWrapper>
        <TeamSelectSection
          selectedTeam={selectedTeam}
          setSelectedTeam={handleTeamSelect}
        />
      </TeamSelectWrapper>

      <MateCardSection selectedTeam={selectedTeam} />

      <GoodsCardSection selectedTeam={selectedTeam} />

      {selectedTeam === '전체' ? (
        <RankingSection />
      ) : (
        <ResultSection selectedTeam={selectedTeam} />
      )}
    </MainPageContainer>
  );
};

export default MainPage;
