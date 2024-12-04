import fetchApi from '@apis/ky'

interface MateListParams {
  teamId?: number | null // 팀 ID
  sortType?: string | null // 정렬 타입
  age?: string | null // 나이대
  gender?: string | null // 성별
  maxParticipants?: string | null // 최대 참여자 수
  transportType?: string | null // 이동수단
}

// 전체 메이트 목록 조회
export const getTotalMateList = async () => {
  const response = await fetchApi.get(`mates`).json()
  return response
}

// 팀별 메이트 목록 조회
export const getMateListByTeam = async (teamId: number) => {
  const response = await fetchApi
    .get(`mates`, {
      searchParams: {
        teamId,
      },
    })
    .json()
  return response
}

// 메이트 목록 조회 (필터 적용)
export const getMateList = async (params: MateListParams) => {
  const searchParams = new URLSearchParams()

  // 조건 추가 (sortType이 "최신 작성일 순"이면 추가하지 않음)
  if (params.teamId) searchParams.append('teamId', params.teamId.toString())
  if (params.sortType && params.sortType !== '최신 작성일 순') {
    searchParams.append('sortType', params.sortType)
  }
  if (params.age) searchParams.append('age', params.age)
  if (params.gender) searchParams.append('gender', params.gender)
  if (params.maxParticipants) {
    const parsedValue = parseInt(params.maxParticipants.replace('명', ''), 10)
    if (!isNaN(parsedValue)) {
      searchParams.append('maxParticipants', parsedValue.toString())
    }
  }
  if (params.transportType)
    searchParams.append('transportType', params.transportType)

  // 요청
  const response = await fetchApi.get(`mates?${searchParams.toString()}`).json()
  return response
}
