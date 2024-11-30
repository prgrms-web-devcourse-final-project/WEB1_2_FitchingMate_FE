import { create } from 'zustand'

import { AlertMessage } from '@utils/alertMessage'
import { RecruitStatus } from '@pages/ChatRoom/Rooms/MateChatRoom/RecruitStatusSection'

interface MateChatRoomStore {
  isOwner: boolean
  recruitStatus: RecruitStatus
  currentAlertStatus: { type: AlertMessage; userName?: string }
  participants: string[]

  setIsOwner: (isOwner: boolean) => void
  setRecruitStatus: (recruitStatus: RecruitStatus) => void
  setCurrentAlertStatus: (currentAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => void
  setParticipants: (participants: []) => void
}

export const useMateChatStore = create<MateChatRoomStore>((set) => ({
  isOwner: true,
  recruitStatus: '직관완료',
  currentAlertStatus: { type: 'DEAL_COMPLETE', userName: '' },
  participants: [],

  setIsOwner: (isOwner: boolean) => set({ isOwner }),
  setRecruitStatus: (recruitStatus: RecruitStatus) => set({ recruitStatus }),
  setCurrentAlertStatus: (currentAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => set({ currentAlertStatus }),
  setParticipants: (participants: string[]) => set({ participants }),
}))
