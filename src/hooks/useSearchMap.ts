import { useEffect, useState } from 'react'

type SearchResult = kakao.maps.services.PlacesSearchResult

const useSearchMap = (keyword: string) => {
  const [searchResultList, setSearchResultList] = useState<SearchResult>([])

  useEffect(() => {
    if (!keyword || keyword === '') return
    const searchMap = new kakao.maps.services.Places()

    const handleSearch = (
      result: SearchResult,
      status: kakao.maps.services.Status,
      pagination: kakao.maps.Pagination,
    ) => {
      if (status === kakao.maps.services.Status.ERROR) {
        throw new Error('카카오 맵 호출 오류')
      }

      if (status === kakao.maps.services.Status.OK) {
        setSearchResultList(result)
      }
    }

    searchMap.keywordSearch(keyword, handleSearch)
  }, [keyword])

  return { searchResultList }
}
export default useSearchMap
