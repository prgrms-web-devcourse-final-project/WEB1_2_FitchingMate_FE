import { create } from 'zustand'
import { GoodsModel, Location } from '@utils/Model/GoodsModel'

interface GoodsFormStore {
  goods: GoodsModel

  setTeamId: (teamId: string) => void
  setTitle: (title: string) => void
  setCategory: (category: string) => void
  setContent: (content: string) => void
  setPrice: (price: string) => void
  setLocation: (location: Location) => void
  setImageList: (imageList: File[]) => void
}

export const useGoodsFormStore = create<GoodsFormStore>((set) => ({
  goods: new GoodsModel('', '', '', '', '', new Location('', '', ''), []),

  setTeamId: (teamId) =>
    set((state) => ({ goods: { ...state.goods, teamId } })),
  setTitle: (title) => set((state) => ({ goods: { ...state.goods, title } })),
  setCategory: (category) =>
    set((state) => ({ goods: { ...state.goods, category } })),
  setContent: (content) =>
    set((state) => ({ goods: { ...state.goods, content } })),
  setPrice: (price) => set((state) => ({ goods: { ...state.goods, price } })),
  setLocation: (location) =>
    set((state) => ({ goods: { ...state.goods, location } })),
  setImageList: (imageList) =>
    set((state) => ({ goods: { ...state.goods, imageList } })),
}))
