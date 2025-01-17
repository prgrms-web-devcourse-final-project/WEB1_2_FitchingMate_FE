import { create } from 'zustand'

interface FilterState {
  selectedFilters: {
    sortType: string
    age: string | null
    gender: string | null
    maxParticipants: string | null
    transportType: string | null
  }
  selectedTeam: number | null // 추가된 상태
  setSelectedFilters: (filters: Partial<FilterState['selectedFilters']>) => void
  setSelectedTeam: (team: number | null) => void // 팀 설정 함수
  resetFilters: () => void
}

const useFilterStore = create<FilterState>((set) => ({
  selectedFilters: {
    sortType: '최신 작성일 순',
    age: null,
    gender: null,
    maxParticipants: null,
    transportType: null,
  },
  selectedTeam: Number(localStorage.getItem('teamId')) || null, // 초기값 설정
  setSelectedFilters: (filters) =>
    set((state) => ({
      selectedFilters: { ...state.selectedFilters, ...filters },
    })),
  setSelectedTeam: (team) => set({ selectedTeam: team }), // 팀 상태 업데이트
  resetFilters: () =>
    set({
      selectedFilters: {
        sortType: '최신 작성일 순',
        age: null,
        gender: null,
        maxParticipants: null,
        transportType: null,
      },
      // selectedTeam: null, // 초기화
    }),
}))

export default useFilterStore
