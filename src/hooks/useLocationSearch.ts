import { useEffect } from 'react'
import useDebounce from './useDebounce'
import useSearchMap from './useSearchMap'
import { useGoodsFormStore } from '@store/useGoodsFormStore'

const DEBOUNCE_DELAY = 300

const useLocationSearch = () => {
  const location = useGoodsFormStore((state) => state.goods.location)
  const setLocation = useGoodsFormStore((state) => state.setLocation)

  const debouncePlaceName = useDebounce(location.placeName, DEBOUNCE_DELAY)

  const { searchResultList } = useSearchMap(debouncePlaceName)

  useEffect(() => {
    if (debouncePlaceName === '')
      setLocation({ ...location, latitude: null, longitude: null })
  }, [debouncePlaceName])

  return {
    location,
    setLocation,
    searchResultList,
  }
}

export default useLocationSearch
