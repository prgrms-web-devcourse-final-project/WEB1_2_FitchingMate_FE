import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'
import { LocationSearchSection, MapSection, SearchResult } from './style'

import useSearchMap from '@hooks/useSearchMap'

import ResultCard from './ResultCard'
import { useEffect, useState } from 'react'
import useDebounce from '@hooks/useDebounce'
import KakaoMap from './KakaoMap'

type SearchResult = kakao.maps.services.PlacesSearchResultItem
interface SearchLocation {
  x: number
  y: number
}

const SecondTab = () => {
  /**
   * 검색어 관리
   *
   * 1. 검색어 상태 관리
   * 2. 검색어 디바운스 처리
   */
  const [keyword, setKeyword] = useState('')
  const DEBOUNCE_DELAY = 300
  const debounceKeyword = useDebounce(keyword, DEBOUNCE_DELAY)

  // 검색 결과 상태 관리
  const [resultListState, setResultListState] = useState<boolean>(false)

  // 검색 위치 관리
  const [searchLocation, setSearchLocation] = useState<SearchLocation | null>(
    null,
  )

  useEffect(() => {
    if (keyword == '') {
      setResultListState(false)
      setSearchLocation(null)
    }
  }, [keyword])

  const { searchResultList } = useSearchMap(debounceKeyword)

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResultListState(true)
    setKeyword(e.target.value)
  }

  const handleResultCardClick = (searchResult: SearchResult) => {
    const { x, y } = searchResult
    setSearchLocation({ x: Number(x), y: Number(y) })

    setKeyword(searchResult.place_name)
    setResultListState(false)
  }

  const resultList = searchResultList?.map((searchResult: SearchResult) => {
    return (
      <ResultCard
        key={searchResult.id}
        searchResult={searchResult}
        onClick={() => handleResultCardClick(searchResult)}
      />
    )
  })

  const mapSection = searchLocation ? (
    <KakaoMap searchLocation={searchLocation} />
  ) : (
    <p>거래할 위치를 선택해주세요</p>
  )

  return (
    <>
      <QuestionSection>
        <label htmlFor='goods'>거래장소</label>
        <LocationSearchSection>
          <input
            id='goods'
            type='text'
            onChange={handleKeywordChange}
            value={keyword}
          />
          {resultListState && <SearchResult>{resultList}</SearchResult>}
        </LocationSearchSection>
      </QuestionSection>
      <MapSection>{mapSection}</MapSection>
    </>
  )
}

export default SecondTab
