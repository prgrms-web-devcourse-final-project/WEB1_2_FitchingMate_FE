import {
  GoodsChatParticipantResponse,
  GoodsChatroomResponse,
} from '@typings/db'
import {
  GoodsChatMessageResponse,
  GoodsCreateResponse,
} from '@typings/mateChat'
import fetchApi from './ky'

const goodsChatService = {
  createGoodsChatroom: async (buyerId: number, goodsPostId: string) => {
    const response = await fetchApi
      .post<GoodsCreateResponse>(
        `goods/chat?buyerId=${buyerId}&goodsPostId=${goodsPostId}`,
      )
      .json()

    return response
  },

  // 채팅 페이지 => 채팅방 목록
  getGoodsChatroomList: async (page: number, size: number) => {
    const response = await fetchApi
      .get<GoodsChatMessageResponse>(`goods/chat?page=${page}&size=${size}`)
      .json()

    return response
  },

  // 채팅 페이지 => 채팅방 상세
  getGoodsChatroom: async (chatRoomId: string) => {
    const response = await fetchApi
      .get<GoodsChatroomResponse>(`goods/chat/${chatRoomId}`)
      .json()

    return response.data
  },

  getChatMessage: async (chatRoomId: string, page: number) => {
    const response = await fetchApi
      .get<GoodsChatMessageResponse>(
        `goods/chat/${chatRoomId}/message?page=${page}`,
      )
      .json()

    return response.data
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

  exitGoodsChat: async (chatRoomId: string) => {
    const response = await fetchApi.delete(`goods/chat/${chatRoomId}`).json()

    return response
  },

  goodsParticipantList: async (chatRoomId: string) => {
    const response = await fetchApi
      .get<GoodsChatParticipantResponse>(`goods/chat/${chatRoomId}/members`)
      .json()

    return response.data
  },
}

export default goodsChatService
