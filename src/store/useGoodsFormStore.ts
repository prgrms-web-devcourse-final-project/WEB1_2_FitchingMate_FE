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

  setTeamId: (teamId: string) =>
    set((state) => ({ goods: { ...state.goods, teamId } })),
  setTitle: (title: string) =>
    set((state) => ({ goods: { ...state.goods, title } })),
  setCategory: (category: string) =>
    set((state) => ({ goods: { ...state.goods, category } })),
  setContent: (content: string) =>
    set((state) => ({ goods: { ...state.goods, content } })),
  setPrice: (price: string) =>
    set((state) => ({ goods: { ...state.goods, price } })),
  setLocation: (location: Location) =>
    set((state) => ({ goods: { ...state.goods, location } })),
  setImageList: (imageList: File[]) =>
    set((state) => ({ goods: { ...state.goods, imageList } })),
}))
