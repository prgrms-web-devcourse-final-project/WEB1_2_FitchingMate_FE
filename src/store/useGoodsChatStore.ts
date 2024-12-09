import { create } from 'zustand'

import { AlertMessage } from '@constants/alertMessage'

interface GoodsChatRoomStatusStore {
  isOwner: boolean | null
  isTrade: boolean
  currentChatRoomId: string | null
  goodsAlertStatus: { type: AlertMessage; userName?: string }
  currentPostId: number | null
  currentBuyerId: number | null
  currentSellerId: number | null
  setIsOwner: (isOwner: boolean) => void
  setIsTrade: (isTrade: boolean) => void
  setCurrentChatRoomId: (currentChatRoomId: string | null) => void
  setGoodsAlertStatus: (goodsAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => void
  setCurrentPostId: (currentPostId: number | null) => void
  setCurrentBuyerId: (currentBuyerId: number | null) => void
  setCurrentSellerId: (currentSellerId: number | null) => void
}

export const useGoodsChatStore = create<GoodsChatRoomStatusStore>((set) => ({
  isOwner: null,
  isTrade: false,
  currentChatRoomId: null,
  goodsAlertStatus: { type: 'DEAL_COMPLETE', userName: '' },
  currentPostId: null,
  currentBuyerId: null,
  currentSellerId: null,
  setIsOwner: (isOwner: boolean) => set({ isOwner }),
  setIsTrade: (isTrade: boolean) => set({ isTrade }),
  setCurrentChatRoomId: (currentChatRoomId) => set({ currentChatRoomId }),
  setGoodsAlertStatus: (goodsAlertStatus: {
    type: AlertMessage
    userName?: string
  }) => set({ goodsAlertStatus }),
  setCurrentPostId: (currentPostId) => set({ currentPostId }),
  setCurrentBuyerId: (currentBuyerId) => set({ currentBuyerId }),
  setCurrentSellerId: (currentSellerId) => set({ currentSellerId }),
}))
