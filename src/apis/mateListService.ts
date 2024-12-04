import fetchApi from '@apis/ky'

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
