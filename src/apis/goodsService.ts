import { GoodsDetailResponse, GoodsListResponse } from '@typings/db'
import fetchApi from './ky'

const KBO_NUMBER = 0

const goodsService = {
  getGoodsList: async (
    teamId?: number,
    category?: string,
    pageParam?: number,
  ) => {
    let endpoint = 'goods?'
    if (teamId !== KBO_NUMBER) endpoint += `teamId=${teamId}&`
    if (category !== '전체') endpoint += `category=${category}&`

    const response = await fetchApi
      .get<GoodsListResponse>(`${endpoint}page=${pageParam}`)
      .json()

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
