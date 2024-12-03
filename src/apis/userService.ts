import fetchApi from './ky'

const userService = {
  getUserInfo: async (userId) => {
    const response = await fetchApi.get(`members/${userId}`).json()

    return response.data
  },
}

export default userService
