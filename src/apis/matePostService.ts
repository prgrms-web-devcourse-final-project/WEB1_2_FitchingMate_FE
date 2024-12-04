import { MatePostResponse } from '@typings/db'
import fetchApi from './ky'

const matePostService = {
  postMatePost: async (formData: FormData) => {
    const response = await fetchApi
      .post(`mates`, {
        body: formData,
      })
      .json()

    return response
  },

  getMatePost: async (matePostId: string) => {
    const response = await fetchApi
      .get<MatePostResponse>(`mates/${matePostId}`)
      .json()

    return response.data
  },

  getMatePostList: async () => {
    const response = await fetchApi.get<MatePostResponse>(`mates`).json()

    return response.data
  },

  editMatePost: async (
    memberId: number,
    matePostId: number,
    formData: FormData,
  ) => {
    console.log(memberId, matePostId)
    const response = await fetchApi
      .patch(`mates/${memberId}/${matePostId}`, { body: formData })
      .json()

    return response
  },

  deleteMatePost: async (memberId: number, matePostId: string) => {
    const response = await fetchApi
      .delete(`mates/${memberId}/${matePostId}`)
      .json()

    return response
  },
}

export default matePostService
