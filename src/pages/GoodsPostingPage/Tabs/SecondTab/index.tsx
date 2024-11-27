import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'
import { LocationSearchSection, MapSection, MapSectionContainer } from './style'

import useSearchMap from '@hooks/useSearchMap'

import { useEffect, useRef, useState } from 'react'
import useDebounce from '@hooks/useDebounce'
import KakaoMap from './KakaoMap'
import ResultList from './ResultList'

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
   * 3. 검색 결과 상태 관리
   */
  const [keyword, setKeyword] = useState('')
  const DEBOUNCE_DELAY = 300
  const debounceKeyword = useDebounce(keyword, DEBOUNCE_DELAY)
  const { searchResultList } = useSearchMap(debounceKeyword)

  // 드롭다운 상태 관리
  const [dropMenuState, setDropMenuState] = useState<boolean>(false)

  // 검색 위치 관리
  const [searchLocation, setSearchLocation] = useState<SearchLocation | null>(
    null,
  )

  // 드롭메뉴 외부 클릭 시 닫히는 이벤트 처리

  const dropMenuRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleOutsideClose = (e: { target: any }) => {
      if (dropMenuState && !dropMenuRef.current?.contains(e.target)) {
        setDropMenuState(false)
      }
    }
    document.addEventListener('click', handleOutsideClose)

    return () => document.removeEventListener('click', handleOutsideClose)
  }, [dropMenuState])

  // 검색어가 없을 경우 검색 위치 초기화
  useEffect(() => {
    if (keyword == '') setSearchLocation(null)
  }, [keyword])

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropMenuState(true)
    setKeyword(e.target.value)
  }

  const handleResultCardClick = (searchResult: SearchResult) => {
    const { x, y } = searchResult
    setSearchLocation({ x: Number(x), y: Number(y) })

    setKeyword(searchResult.place_name)
    setDropMenuState(false)
  }

  const handleInputFocus = () => {
    setDropMenuState(true)
  }

  const mapContent = searchLocation ? (
    <KakaoMap searchLocation={searchLocation} />
  ) : (
    <p>거래할 위치를 선택해주세요</p>
  )

  return (
    <MapSectionContainer>
      <QuestionSection>
        <label
          htmlFor='goods'
          style={{ width: 'fit-content' }}
        >
          거래장소
        </label>
        <LocationSearchSection>
          <input
            ref={dropMenuRef}
            id='goods'
            type='text'
            onChange={handleKeywordChange}
            onFocus={handleInputFocus}
            value={keyword}
          />
          {dropMenuState && (
            <ResultList
              resultList={searchResultList}
              handleResultCardClick={handleResultCardClick}
            />
          )}
        </LocationSearchSection>
      </QuestionSection>
      <MapSection>{mapContent}</MapSection>
    </MapSectionContainer>
  )
}

export default SecondTab
