import ResultCard from '../ResultCard'
import { NoneResult, SearchResult } from './style'

interface ResultListProps {
  resultList: kakao.maps.services.PlacesSearchResult
  handleResultCardClick: (
    searchResult: kakao.maps.services.PlacesSearchResultItem,
  ) => void
}

const ResultList = ({ resultList, handleResultCardClick }: ResultListProps) => {
  let resultContent

  if (resultList.length === 0) {
    resultContent = <NoneResult>검색 결과가 없습니다.</NoneResult>
  }

  if (resultList.length) {
    resultContent = resultList.map((result) => (
      <ResultCard
        key={result.id}
        searchResult={result}
        onClick={() => handleResultCardClick(result)}
      />
    ))
  }

  return <SearchResult>{resultContent}</SearchResult>
}

export default ResultList
