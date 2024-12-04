import fetchApi from './ky'

const reviewService = {
  postMateReview: async (
    memberid: number,
    postId: number,
    jsonData: unknown,
  ) => {
    const response = await fetchApi
      .post(`mates/${memberid}/${postId}/reviews`, {
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
    jsonData: unknown,
  ) => {
    const response = await fetchApi
      .post(`goods/${reviewerId}/post/${goodsPostId}/review`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonData,
      })
      .json()

    return response
  },

  getTimelineList: async (page: number) => {
    const response = await fetchApi
      .get(`profile/timeline?page=${page}&size=0`)
      .json()

    return response.data
  },
}

export default reviewService
