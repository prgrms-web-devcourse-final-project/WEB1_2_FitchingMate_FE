import { GoodsListResponse } from '@typings/db'
import fetchApi from './ky'

const goodsService = {
  getGoodsList: async () => {
    const response = await fetchApi
      .get<GoodsListResponse>(
        `goods?teamId=1&category=유니폼&page=0&size=1&sort=string`,
      )
      .json()

    return response.data
  },
}

export default goodsService
