import { GoodsDetailResponse, GoodsListResponse } from '@typings/db'
import fetchApi from './ky'
const goodsPostService = {
  postGoodsPost: async (formData: FormData) => {
    const response = await fetchApi.post(`goods`, { body: formData }).json()

    return response
  },

  editGoodsPost: async (goodsId: number, formData: FormData) => {
    const response = await fetchApi
      .put(`goods/${goodsId}`, { body: formData })
      .json()

    return response
  },

  getGoodsPost: async (goodsId: number) => {
    const response = await fetchApi
      .get<GoodsDetailResponse>(`goods/${goodsId}`)
      .json()

    return response.data
  },

  getGoodsPostList: async () => {
    const response = await fetchApi.get<GoodsListResponse>(`goods`).json()

    return response
  },

  deleteGoodsPost: async (goodsPostId: number) => {
    const response = await fetchApi.delete(`goods/${goodsPostId}`).json()

    return response
  },

  completeGoodsPost: async (goodsPostId: number, buyerId: number) => {
    const response = await fetchApi
      .post(`goods/${goodsPostId}/complete?buyerId=${buyerId}`)
      .json()

    return response
  },
}

export default goodsPostService
