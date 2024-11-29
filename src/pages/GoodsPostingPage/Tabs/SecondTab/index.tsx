import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'
import { LocationSearchSection, MapSection, MapSectionContainer } from './style'

import KakaoMap from './KakaoMap'
import ResultList from './ResultList'
import useDropdownMenu from '@hooks/useDropDownMenu'
import useLocationSearch from '@hooks/useLocationSearch'

type SearchResult = kakao.maps.services.PlacesSearchResultItem

const SecondTab = () => {
  // 위치 검색 관리
  const {
    keyword,
    setKeyword,
    searchResultList,
    searchLocation,
    setSearchLocation,
  } = useLocationSearch()

  // 드롭다운 상태 관리
  const { dropMenuState, setDropMenuState, dropMenuRef } = useDropdownMenu()

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
