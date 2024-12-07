import {
  MateChatRoomDetail,
  MateChatRoomDetailResponse,
  MateChatRoomListResponse,
} from '@typings/mateChat'

import fetchApi from './ky'

const mateChatService = {
  //  메이트 게시글에서 채팅방 생성/입장
  createMateChat: async (matePostId: string) => {
    const response = await fetchApi
      .post<MateChatRoomDetailResponse>(`mates/chat/post/${matePostId}/join`)
      .json()
    return response
  },

  //  메이트 채팅방 목록 조회
  getMateChatRoomList: async () => {
    const response = await fetchApi
      .get<MateChatRoomListResponse>(`mates/chat/me`)
      .json()
    return response
  },

  joinMateChat: async (chatroomId: string) => {
    const response = await fetchApi
      .post<MateChatRoomDetailResponse>(`mates/chat/${chatroomId}/join`)
      .json()
    return response
  },

  //  메이트 채팅방 상세 조회
  getMateChatRoomDetail: async (chatroomId: string) => {
    const response = await fetchApi
      .get<MateChatRoomDetail>(`/api/mates/chat/${chatroomId}/messages`)
      .json()
    return response
  },

  //  메이트 채팅방 나가기
  exitMateChat: async (mateChatRoomId: string) => {
    const response = await fetchApi
      .delete(`mates/chat/${mateChatRoomId}/leave`)
      .json()
    return response
  },
}

export default mateChatService
