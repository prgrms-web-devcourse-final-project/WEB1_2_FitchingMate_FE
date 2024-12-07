import { ResultSectionContainer } from './style'
import ResultSummary from './ResultSummary'
import ResultList from './ResultList'

interface ResultSectionProps {
  selectedTeam: number
}

const ResultSection = ({ selectedTeam }: ResultSectionProps) => {
  return (
    <ResultSectionContainer>
      <ResultSummary selectedTeam={selectedTeam} />
      <ResultList teamKey={selectedTeam} />
    </ResultSectionContainer>
  )
}

export default ResultSection
