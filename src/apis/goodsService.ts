import { GoodsDetailResponse, GoodsListResponse } from '@typings/db'
import fetchApi from './ky'

const goodsService = {
  getGoodsList: async (teamId?: number, category?: string) => {
    let endpoint = 'goods?'
    if (teamId !== 0) endpoint += `teamId=${teamId}&`
    if (category !== '전체') endpoint += `category=${category}&`

    const response = await fetchApi.get<GoodsListResponse>(endpoint).json()

    return response.data
  },
  getGoodsDetail: async (goodsId: string) => {
    const response = await fetchApi
      .get<GoodsDetailResponse>(`goods/${goodsId}`)
      .json()

    return response.data
  },
}

export default goodsService
