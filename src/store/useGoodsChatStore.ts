import { create } from 'zustand'

import { AlertMessage } from '@constants/alertMessage'

interface GoodsChatRoomStatusStore {
  isOwner: boolean
  isTrade: boolean
  goodsAlertStatus: { type: AlertMessage; userName?: string }

  setIsOwner: (isOwner: boolean) => void
  setIsTrade: (isTrade: boolean) => void
  setGoodsAlertStatus: (goodsAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => void
}

export const useGoodsChatStore = create<GoodsChatRoomStatusStore>((set) => ({
  isOwner: true,
  isTrade: false,
  goodsAlertStatus: { type: 'DEAL_COMPLETE', userName: '' },

  setIsOwner: (isOwner: boolean) => set({ isOwner }),
  setIsTrade: (isTrade: boolean) => set({ isTrade }),
  setGoodsAlertStatus: (goodsAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => set({ goodsAlertStatus }),
}))
