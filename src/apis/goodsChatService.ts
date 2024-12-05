import { GoodsChatroom, GoodsChatroomResponse } from '@typings/db'
import fetchApi from './ky'

const goodsChatService = {
  createGoodsChatroom: async (buyerId: number, goodsPostId: string) => {
    const response = await fetchApi
      .post(`goods/chat?buyerId=${buyerId}&goodsPostId=${goodsPostId}`)
      .json()

    return response
  },

  // 채팅 페이지 => 채팅방 목록
  getGoodsChatroomList: async (page: number, size: number) => {
    const response = await fetchApi
      .get<GoodsChatroom>(`goods/chat?page=${page}&size=${size}`)
      .json()

    return response.data
  },

  // 채팅 페이지 => 채팅방 상세
  getGoodsChatroom: async (chatRoomId: number) => {
    const response = await fetchApi
      .get<GoodsChatroomResponse>(`goods/chat/${chatRoomId}`)
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

  exitGoodsChat: async (chatRoomId: number) => {
    const response = await fetchApi.delete(`goods/chat/${chatRoomId}`).json()

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
