import { ResultSectionContainer } from './style';
import ResultSummary from './ResultSummary';
import ResultList from './ResultList';

interface ResultSectionProps {
  selectedTeam: string;
}

const ResultSection = ({ selectedTeam }: ResultSectionProps) => {
  return (
    <ResultSectionContainer>
      <ResultSummary teamKey={selectedTeam} />
      <ResultList teamKey={selectedTeam} />
    </ResultSectionContainer>
  );
};

export default ResultSection;
