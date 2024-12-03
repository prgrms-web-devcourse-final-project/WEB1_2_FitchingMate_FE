import fetchApi from './ky'

const goodsChatService = {
  createGoodsChatroom: async (buyerId: number, goodsPostId: number) => {
    const response = await fetchApi
      .post(`goods/chat?buyerId=${buyerId}&goodsPostId=${goodsPostId}`)
      .json()

    return response
  },
}

export default goodsChatService
