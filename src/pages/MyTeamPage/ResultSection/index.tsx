import { ResultSectionContainer } from './style'
import ResultSummary from './ResultSummary'
import ResultList from './ResultList'

const ResultSection = () => {
  return (
    <ResultSectionContainer>
      <ResultSummary teamKey='삼성' />
      <ResultList />
    </ResultSectionContainer>
  )
}

export default ResultSection
