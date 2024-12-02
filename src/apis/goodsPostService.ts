import { GoodsDetailResponse, GoodsListResponse } from '@typings/db'
import fetchApi from './ky'
const goodsPostService = {
  postGoodsPost: async (memberId: number, formData: FormData) => {
    const response = await fetchApi
      .post(`goods/${memberId}`, { body: formData })
      .json()

    return response
  },

  editGoodsPost: async (
    memberId: number,
    goodsId: number,
    formData: FormData,
  ) => {
    const response = await fetchApi
      .put(`goods/${memberId}/post/${goodsId}`, { body: formData })
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
}

export default goodsPostService
