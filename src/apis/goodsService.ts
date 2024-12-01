import { GoodsListResponse } from '@typings/db'
import { data } from './../pages/TimelinePage/mockData'
import fetchApi from './ky'

const goodsService = {
  getGoodsList: async () => {
    const response = await fetchApi.get<GoodsListResponse>(`goods`).json()

    return response.data
  },
}

export default goodsService
