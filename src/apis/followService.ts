import fetchApi from './ky'

const followService = {
  postFollowUser: async (memberId: number) => {
    const response = await fetchApi.post(`profile/follow/${memberId}`)

    return response
  },
  getFollowingList: async (memberId: number) => {
    const response = await fetchApi.get(`profile/${memberId}/followings`).json()

    return response
  },
  getFollowerList: async (memberId: number) => {
    const response = await fetchApi.get(`profile/${memberId}/followers`).json()

    return response
  },
}

export default followService
