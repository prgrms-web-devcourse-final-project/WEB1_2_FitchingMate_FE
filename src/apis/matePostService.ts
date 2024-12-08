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

  /**
   * 모집 완료 요청 : 체크완료
   *
   * @param memberId
   * @param matePostId
   * @param data
   * @returns
   *
   * {
   *  "status": "모집완료",
   * "participantIds": [2, 3, 4]
   * }
   *
   * 추후 memberId 삭제
   */

  completeRecruitmentMatePost: async (
    memberId: number,
    matePostId: number,
    data: { status: string; participantIds: number[] },
  ) => {
    const response = await fetchApi
      .patch(`mates/${memberId}/${matePostId}/status`, {
        json: data,
      })
      .json()

    return response
  },

  /**
   * 모집 완료 요청 : 체크완료
   *
   * @param memberId
   * @param matePostId
   * @param data
   * @returns
   *
   * {
   *  "participantIds": [2, 3, 4]
   * }
   */

  completeMatePost: async (
    memberId: number,
    matePostId: number,
    data: { participantIds: number[] },
  ) => {
    const response = await fetchApi
      .patch(`mates/${memberId}/${matePostId}/complete`, {
        json: data,
      })
      .json()

    return response
  },
}

export default matePostService
