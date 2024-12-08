import { create } from 'zustand'
import { MatePost } from '@typings/postForm'

interface MateFormStore {
  matePost: MatePost
  selectedWeek: number
  img: File | null

  setTeamId: (teamId: number) => void
  setMatchId: (matchId: number) => void
  setTitle: (title: string) => void
  setContent: (content: string) => void
  setAge: (age: string) => void
  setMaxParticipants: (maxParticipant: string) => void
  setGender: (gender: string) => void
  setTransportation: (transport: string) => void
  setSelectedWeek: (selectedWeek: number) => void
  setImg: (img: File | null) => void
  setMateFormData: (mateFormData: MatePost) => void
  setInitialState: () => void
}

const initialState = {
  matePost: {
    teamId: null,
    title: '',
    content: '',
    age: '',
    maxParticipants: '',
    gender: '',
    transportType: '',
    matchId: null,
  },

  img: null,

  selectedWeek: 1,
}

export const useMateFormStore = create<MateFormStore>((set) => ({
  ...initialState,

  setSelectedWeek: (selectedWeek) => set(() => ({ selectedWeek })),
  setMatchId: (matchId) =>
    set((state) => ({ matePost: { ...state.matePost, matchId } })),
  setTitle: (title) =>
    set((state) => ({ matePost: { ...state.matePost, title } })),
  setContent: (content) =>
    set((state) => ({ matePost: { ...state.matePost, content } })),
  setAge: (age) => set((state) => ({ matePost: { ...state.matePost, age } })),
  setMaxParticipants: (maxParticipants) =>
    set((state) => ({ matePost: { ...state.matePost, maxParticipants } })),
  setGender: (gender) =>
    set((state) => ({ matePost: { ...state.matePost, gender } })),
  setTransportation: (transportType) =>
    set((state) => ({ matePost: { ...state.matePost, transportType } })),
  setImg: (img) => set(() => ({ img })),
  setTeamId: (teamId) =>
    set((state) => ({ matePost: { ...state.matePost, teamId } })),
  setMateFormData: (mateFormData) => set(() => ({ matePost: mateFormData })),
  setInitialState: () => set(() => ({ ...initialState })),
}))
