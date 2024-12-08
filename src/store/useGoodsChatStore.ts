import { create } from 'zustand'

import { AlertMessage } from '@constants/alertMessage'

interface GoodsChatRoomStatusStore {
  isOwner: boolean
  isTrade: boolean
  currentChatRoomId: string | null
  goodsAlertStatus: { type: AlertMessage; userName?: string }

  setIsOwner: (isOwner: boolean) => void
  setIsTrade: (isTrade: boolean) => void
  setCurrentChatRoomId: (currentChatRoomId: string | null) => void
  setGoodsAlertStatus: (goodsAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => void
}

export const useGoodsChatStore = create<GoodsChatRoomStatusStore>((set) => ({
  isOwner: true,
  isTrade: false,
  currentChatRoomId: null,
  goodsAlertStatus: { type: 'DEAL_COMPLETE', userName: '' },

  setIsOwner: (isOwner: boolean) => set({ isOwner }),
  setIsTrade: (isTrade: boolean) => set({ isTrade }),
  setCurrentChatRoomId: (currentChatRoomId) => set({ currentChatRoomId }),
  setGoodsAlertStatus: (goodsAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => set({ goodsAlertStatus }),
}))
