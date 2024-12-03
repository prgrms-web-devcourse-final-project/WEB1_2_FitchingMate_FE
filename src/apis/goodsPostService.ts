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
}

export default goodsPostService
