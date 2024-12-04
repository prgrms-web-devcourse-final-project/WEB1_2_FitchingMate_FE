import fetchApi from './ky'

const goodsChatService = {
  createGoodsChatroom: async (buyerId: number, goodsPostId: number) => {
    const response = await fetchApi
      .post(`goods/chat?buyerId=${buyerId}&goodsPostId=${goodsPostId}`)
      .json()

    return response
  },

  getGoodsChatList: async (memberId: number, page: number, size: number) => {
    const response = await fetchApi
      .get(`goods/chat?memberId=${memberId}&page=${page}&size=${size}`)
      .json()

    return response
  },

  // 채팅 페이지 => 채팅방 상세
  getGoodsChatroom: async (chatRoomId: number, memberId: number) => {
    const response = await fetchApi
      .get(`goods/chat/${chatRoomId}?memberId=${memberId}`)
      .json()

    return response
  },

  getChatList: async (
    chatRoomId: number,
    memberId: number,
    page: number,
    size: number,
  ) => {
    const response = await fetchApi
      .get(
        `goods/chat/${chatRoomId}/message?memberId=${memberId}&page=${page}&size=${size}`,
      )
      .json()

    return response
  },

  exitGoodsChat: async (chatRoomId: number, memberId: number) => {
    const response = await fetchApi
      .delete(`goods/chat/${chatRoomId}?memberId=${memberId}`)
      .json()

    return response
  },

  goodsParticipantList: async (chatRoomId: number, memberId: number) => {
    const response = await fetchApi
      .get(`goods/chat/${chatRoomId}/members?memberId=${memberId}`)
      .json()

    return response
  },
}

export default goodsChatService
