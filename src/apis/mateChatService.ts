import {
  MateChatMember,
  MateChatRoomDetail,
  MateChatRoomDetailResponse,
  MateChatRoomListResponse,
} from '@typings/mateChat'

import fetchApi from './ky'
import { RecruitStatus } from '@pages/ChatRoom/Rooms/MateChatRoom/RecruitStatusSection'

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
      .get<MateChatRoomDetail>(`mates/chat/${chatroomId}/messages?page=0`)
      .json()

    return response.data
  },

  //  메이트 채팅방 나가기
  exitMateChat: async (mateChatRoomId: string) => {
    const response = await fetchApi
      .delete(`mates/chat/${mateChatRoomId}/leave`)
      .json()
    return response
  },

  getMateChatMembers: async (chatroomId: string) => {
    const response = await fetchApi
      .get<MateChatMember[]>(`mates/chat/${chatroomId}/members`)
      .json()

    return response.data
  },

  changeMateRecruitStatus: async (
    postId: string,
    recruitData: { status: RecruitStatus; participantIds: number[] },
  ) => {
    const response = await fetchApi
      .patch(`mates/${postId}/status`, {
        json: recruitData,
      })
      .json()
    return response
  },

  completeMate: async (postId: string, data: { participantIds: number[] }) => {
    const response = await fetchApi
      .patch(`mates/${postId}/complete`, {
        json: data,
      })
      .json()

    return response
  },
}

export default mateChatService
