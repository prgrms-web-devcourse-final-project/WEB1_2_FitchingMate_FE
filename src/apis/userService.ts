import { GoodsRecordApiResponse } from './../typings/db'
import { ProfileEditApiResponse } from '@typings/db'
import fetchApi from './ky'
import { MyDataApiReponse, UserDataApiResponse } from '@typings/userForm'

const userService = {
  getUserInfo: async (userId: number) => {
    const response: UserDataApiResponse = await fetchApi
      .get(`members/${userId}`)
      .json()

    return response.data
  },

  getMyInfo: async (userId: number) => {
    const response: MyDataApiReponse = await fetchApi
      .get(`members/me?memberId=${userId}`)
      .json()

    return response.data
  },

  editMyInfo: async (formData: FormData) => {
    const response: ProfileEditApiResponse = await fetchApi
      .put(`members/me`, {
        body: formData,
      })
      .json()

    return response
  },

  getGoodsRecordList: async (
    memberId: number,
    callingType: string,
    page: number,
  ) => {
    const response: GoodsRecordApiResponse = await fetchApi
      .get(`profile/${memberId}/goods/${callingType}?page=${page}&size=5`)
      .json()
    return response.data
  },
}

export default userService
