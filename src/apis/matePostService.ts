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

  getMatePost: async (matePostId: number) => {
    const response = await fetchApi
      .get<MatePostResponse>(`mates/${matePostId}`)
      .json()

    return response.data
  },

  editMatePost: async (
    memberId: number,
    matePostId: number,
    formData: FormData,
  ) => {
    const response = await fetchApi
      .patch(`mates/${memberId}/${matePostId}`, { body: formData })
      .json()

    return response
  },
}

export default matePostService
