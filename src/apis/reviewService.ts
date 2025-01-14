import {
  GetReviewDetailApiResponse,
  GetReviewListApiResponse,
  GetTimelineListApiResponse,
} from '@typings/db'
import fetchApi from './ky'

const reviewService = {
  postMateReview: async (postId: number, jsonData: string) => {
    const response = await fetchApi
      .post(`mates/review/${postId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      })
      .json()
    return response
  },

  postGoodsReview: async (
    reviewerId: number,
    goodsPostId: number,
    jsonData: string,
  ) => {
    const response = await fetchApi
      .post(`goods/review/${goodsPostId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      })
      .json()

    return response
  },

  getReviewList: async (type: string, memberId: number, page: number) => {
    const response: GetReviewListApiResponse = await fetchApi
      .get(`profile/${memberId}/review/${type}?page=${page}&size=3`)
      .json()

    return response.data
  },

  getTimelineList: async (page: number = 0) => {
    const response: GetTimelineListApiResponse = await fetchApi
      .get(`profile/timeline?page=${page}&size=5`)
      .json()

    return response.data
  },

  getReviewDetailData: async (postId: number, type: string) => {
    const reviewType = type === 'GOODS' ? 'goods' : 'mates'
    const response: GetReviewDetailApiResponse = await fetchApi
      .get(`${reviewType}/${postId}`)
      .json()

    return response.data
  },
}

export default reviewService
