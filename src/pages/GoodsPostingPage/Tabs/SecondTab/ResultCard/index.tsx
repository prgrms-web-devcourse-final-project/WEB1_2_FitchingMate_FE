import CardBedge from '@components/CardBedge'
import { SearchResultItem } from './style'

interface SearchResult {
  searchResult: kakao.maps.services.PlacesSearchResultItem
  onClick: () => void
}

const ResultCard = ({ searchResult, onClick }: SearchResult) => {
  const { place_name, address_name, road_address_name } = searchResult

  return (
    <SearchResultItem onClick={onClick}>
      <h2>{place_name}</h2>
      <p>{road_address_name}</p>
      <div>
        <CardBedge text='지번' />
        <p>{address_name}</p>
      </div>
    </SearchResultItem>
  )
}

export default ResultCard
