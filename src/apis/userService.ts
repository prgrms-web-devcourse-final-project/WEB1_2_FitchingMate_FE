import fetchApi from './ky'

const userService = {
  getUserInfo: async (userId: number) => {
    const response = await fetchApi.get(`members/${userId}`).json()

    return response.data
  },

  getMyInfo: async (userId: number) => {
    const response = await fetchApi.get(`members/me?memberId=${userId}`).json()

    return response.data
  },

  editMyInfo: async (formData: FormData) => {
    const response = await fetchApi
      .put(`members/me`, {
        body: formData,
      })
      .json()

    return response
  },
}

export default userService
