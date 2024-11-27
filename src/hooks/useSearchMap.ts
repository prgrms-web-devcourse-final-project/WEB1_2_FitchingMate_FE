import { useEffect, useRef, useState } from 'react'

type SearchResult = kakao.maps.services.PlacesSearchResult

const useSearchMap = (keyword: string) => {
  const [searchResultList, setSearchResultList] = useState<SearchResult>([])
  const [isError, setIsError] = useState<boolean>(false)

  const prevKeyword = useRef('')

  useEffect(() => {
    if (keyword === '') {
      setSearchResultList([])
      return
    }

    if (keyword.trim() === prevKeyword.current.trim()) return

    const searchMap = new kakao.maps.services.Places()

    const handleSearch = (
      result: SearchResult,
      status: kakao.maps.services.Status,
    ) => {
      if (status === kakao.maps.services.Status.ERROR) {
        setIsError(true)
      }

      if (status === kakao.maps.services.Status.OK) {
        setSearchResultList(result)
      }
    }

    searchMap.keywordSearch(keyword, handleSearch)

    return () => {
      if (isError) setIsError(false)
      prevKeyword.current = keyword
    }
  }, [keyword])

  return { searchResultList, isError }
}
export default useSearchMap
