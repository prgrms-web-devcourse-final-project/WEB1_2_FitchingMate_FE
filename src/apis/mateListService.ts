import fetchApi from '@apis/ky'

export const getTotalMateList = async () => {
  const response = await fetchApi.get(`mates`).json()
  return response
}
