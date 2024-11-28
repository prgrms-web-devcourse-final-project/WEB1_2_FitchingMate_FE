import { create } from 'zustand'
import { GoodsModel, Location } from '@typings/model/GoodsModel'

interface GoodsFormStore {
  goods: GoodsModel
}

export const useGoodsFormStore = create<GoodsFormStore>((set) => ({
  goods: new GoodsModel('', '', '', '', '', new Location('', '', ''), []),

  setTeamId: (teamId: string) =>
    set((state) => ({ goods: { ...state.goods, teamId } })),
  setTitle: (title: string) =>
    set((state) => ({ goods: { ...state.goods, title } })),
  setContent: (content: string) =>
    set((state) => ({ goods: { ...state.goods, content } })),
  setPrice: (price: string) =>
    set((state) => ({ goods: { ...state.goods, price } })),
  setLocation: (location: Location) =>
    set((state) => ({ goods: { ...state.goods, location } })),
  setImages: (images: string[]) =>
    set((state) => ({ goods: { ...state.goods, images } })),
}))
