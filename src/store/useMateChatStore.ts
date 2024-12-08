import { create } from 'zustand'

import { AlertMessage } from '@constants/alertMessage'
import { RecruitStatus } from '@pages/ChatRoom/Rooms/MateChatRoom/RecruitStatusSection'

interface MateChatRoomStore {
  isOwner: boolean
  recruitStatus: RecruitStatus | null
  currentAlertStatus: { type: AlertMessage; userName?: string }
  participants: number[]
  mateChatRoomId: string | null
  confirmedParticipants: number[]
  setIsOwner: (isOwner: boolean) => void
  setRecruitStatus: (recruitStatus: RecruitStatus) => void
  setCurrentAlertStatus: (currentAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => void
  setParticipants: (participants: number[]) => void
  setMateChatRoomId: (mateChatRoomId: string) => void
  setConfirmedParticipants: (confirmedParticipants: number[]) => void
}

export const useMateChatStore = create<MateChatRoomStore>((set) => ({
  isOwner: true,
  recruitStatus: null,
  currentAlertStatus: { type: 'DEAL_COMPLETE', userName: '' },
  participants: [],
  mateChatRoomId: null,
  confirmedParticipants: [],

  setIsOwner: (isOwner: boolean) => set({ isOwner }),
  setRecruitStatus: (recruitStatus: RecruitStatus) => set({ recruitStatus }),
  setCurrentAlertStatus: (currentAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => set({ currentAlertStatus }),
  setParticipants: (participants: number[]) => set({ participants }),
  setMateChatRoomId: (mateChatRoomId: string) => set({ mateChatRoomId }),
  setConfirmedParticipants: (confirmedParticipants: number[]) =>
    set({ confirmedParticipants }),
}))
