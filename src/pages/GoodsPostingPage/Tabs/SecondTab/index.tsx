import { QuestionSection } from '@pages/MatePostingPage/Tabs/FirstTab/style'
import { LocationSearchSection, MapSection, MapSectionContainer } from './style'

import KakaoMap from './KakaoMap'
import ResultList from './ResultList'
import useDropdownMenu from '@hooks/useDropDownMenu'
import useLocationSearch from '@hooks/useLocationSearch'

type SearchResult = kakao.maps.services.PlacesSearchResultItem

const SecondTab = () => {
  // 위치 검색 관리
  const { location, searchResultList, setLocation } = useLocationSearch()
  const { placeName } = location

  // 드롭다운 상태 관리
  const { dropMenuState, setDropMenuState, dropMenuRef } = useDropdownMenu()

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setLocation({ ...location, placeName: value })
  }

  const handleResultCardClick = (searchResult: SearchResult) => {
    const { x, y, place_name } = searchResult

    setLocation({
      placeName: place_name,
      latitude: y,
      longitude: x,
    })

    setDropMenuState(false)
  }

  const handleInputFocus = () => {
    setDropMenuState(true)
  }

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
            value={placeName}
          />
          {dropMenuState && (
            <ResultList
              resultList={searchResultList}
              handleResultCardClick={handleResultCardClick}
            />
          )}
        </LocationSearchSection>
      </QuestionSection>
      <MapSection>
        {location.latitude && location.longitude ? (
          <KakaoMap location={location} />
        ) : (
          <p>거래할 위치를 선택해주세요</p>
        )}
      </MapSection>
    </MapSectionContainer>
  )
}

export default SecondTab
