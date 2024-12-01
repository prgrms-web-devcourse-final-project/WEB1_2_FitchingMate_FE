import { useEffect, useState } from 'react'
import useDebounce from './useDebounce'
import useSearchMap from './useSearchMap'
import { useGoodsFormStore } from '@store/useGoodsFormStore'
import { Location } from '@utils/Model/GoodsModel'

interface SearchLocation {
  x: number
  y: number
}

const useLocationSearch = () => {
  const [keyword, setKeyword] = useState('')
  const DEBOUNCE_DELAY = 300
  const debounceKeyword = useDebounce(keyword, DEBOUNCE_DELAY)

  const { searchResultList } = useSearchMap(debounceKeyword)
  const [searchLocation, setSearchLocation] = useState<SearchLocation | null>(
    null,
  )

  const setLocation = useGoodsFormStore((state) => state.setLocation)

  useEffect(() => {
    if (!searchLocation || !keyword) return

    const location = new Location(
      searchLocation.x.toString(),
      searchLocation.y.toString(),
      keyword,
    )

    setLocation(location)
  }, [searchLocation, keyword])

  useEffect(() => {
    if (keyword === '') setSearchLocation(null)
  }, [keyword])

  return {
    keyword,
    setKeyword,
    searchResultList,
    searchLocation,
    setSearchLocation,
  }
}

export default useLocationSearch
