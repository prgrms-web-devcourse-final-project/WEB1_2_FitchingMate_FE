import { create } from 'zustand'

interface GoodsListState {
  selectedCategory: string,
  selectedTeam: number | null,
    setSelectedTeam: (team: number | null) => void,
    setSelectedCategory: (category: string) => void,
}

const useGoodsListStore = create<GoodsListState>((set) => ({
  selectedCategory: '전체',
  selectedTeam: Number(localStorage.getItem('teamId')) || null,
  setSelectedTeam: (team) => set({ selectedTeam: team }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}))

export default useGoodsListStore