interface KakaoService {
  kakaoMapCallback: (
    result: kakao.maps.services.PlacesSearchResult,
    status: kakao.maps.services.Status,
    pagination: kakao.maps.Pagination,
  ) => void
  options: { page: number; size: number }
}

const searchMap = new kakao.maps.services.Places()

const kakaoService: KakaoService = {
  kakaoMapCallback: (result, status) => {
    if (status === kakao.maps.services.Status.ERROR) {
      throw new Error('카카오 맵 호출 오류')
    }

    return result
  },

  options: {
    page: 1,
    size: 20,
  },
}

export const fetchSearchMap = (keyword: string) =>
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
    )
  })
