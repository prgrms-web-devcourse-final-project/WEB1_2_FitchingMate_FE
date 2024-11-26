interface KakaoService {
  kakaoMapCallback: (
    result: kakao.maps.services.PlacesSearchResult,
    status: kakao.maps.services.Status,
    pagination: kakao.maps.Pagination,
  ) => void
  options: (pageParam: number) => { page: number; size: number }
}

const searchMap = new kakao.maps.services.Places()

const kakaoService: KakaoService = {
  kakaoMapCallback: (result, status, pagination) => {
    if (status === kakao.maps.services.Status.ERROR) {
      throw new Error('카카오 맵 호출 오류')
    }

    return { result, pagination }
  },

  options: (pageParam: number) => ({
    page: pageParam,
    size: 10,
  }),
}

export const fetchSearchMap = (keyword: string, pageParam: number) =>
  new Promise((resolve, reject) => {
    searchMap.keywordSearch(
      keyword,

      (result, status, pagination) => {
        try {
          const data = kakaoService.kakaoMapCallback(result, status, pagination)
          resolve(data)
        } catch (error) {
          reject(error)
        }
      },

      kakaoService.options(pageParam),
    )
  })
