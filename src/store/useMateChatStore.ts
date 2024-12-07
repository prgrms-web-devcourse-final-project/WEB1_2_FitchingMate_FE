import { create } from 'zustand'

import { AlertMessage } from '@constants/alertMessage'
import { RecruitStatus } from '@pages/ChatRoom/Rooms/MateChatRoom/RecruitStatusSection'

interface MateChatRoomStore {
  isOwner: boolean
  recruitStatus: RecruitStatus | null
  currentAlertStatus: { type: AlertMessage; userName?: string }
  participants: string[]
  mateChatRoomId: string | null

  setIsOwner: (isOwner: boolean) => void
  setRecruitStatus: (recruitStatus: RecruitStatus) => void
  setCurrentAlertStatus: (currentAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => void
  setParticipants: (participants: []) => void
  setMateChatRoomId: (mateChatRoomId: string) => void
}

export const useMateChatStore = create<MateChatRoomStore>((set) => ({
  isOwner: true,
  recruitStatus: null,
  currentAlertStatus: { type: 'DEAL_COMPLETE', userName: '' },
  participants: [],
  mateChatRoomId: null,

  setIsOwner: (isOwner: boolean) => set({ isOwner }),
  setRecruitStatus: (recruitStatus: RecruitStatus) => set({ recruitStatus }),
  setCurrentAlertStatus: (currentAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => set({ currentAlertStatus }),
  setParticipants: (participants: string[]) => set({ participants }),
  setMateChatRoomId: (mateChatRoomId: string) => set({ mateChatRoomId }),
}))
