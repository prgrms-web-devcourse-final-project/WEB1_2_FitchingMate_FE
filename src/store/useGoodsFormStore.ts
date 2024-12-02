import { create } from 'zustand'
import { GoodsPost, Location } from '@typings/postForm'

interface GoodsFormStore {
  goods: GoodsPost
  imageList: File[] | []

  setTeamId: (teamId: number | null) => void
  setTitle: (title: string) => void
  setCategory: (category: string) => void
  setContent: (content: string) => void
  setPrice: (price: string) => void
  setLocation: (location: Location) => void
  setImageList: (imageList: File[] | []) => void
}

export const useGoodsFormStore = create<GoodsFormStore>((set) => ({
  goods: {
    teamId: null,
    title: '',
    category: '',
    content: '',
    price: '',
    location: { latitude: null, longitude: null, placeName: '' },
  },
  imageList: [],

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
  setImageList: (imageList) => set(() => ({ imageList })),
}))
