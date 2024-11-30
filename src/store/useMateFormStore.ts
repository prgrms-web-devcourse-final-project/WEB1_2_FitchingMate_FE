import { create } from 'zustand'
import { GoodsPost } from '@typings/db'

interface MatePost extends GoodsPost {
  img: File | null
}
interface MateFormStore {
  matePost: MatePost
  selectedWeek: number

  setMemberId: (memberId: number) => void
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
}

export const useMateFormStore = create<MateFormStore>((set) => ({
  matePost: {
    memberId: null,
    teamId: null,
    title: '',
    content: '',
    age: '',
    maxParticipants: '',
    gender: '',
    transportType: '',
    img: null,
    matchId: null,
  },

  selectedWeek: 1,

  setSelectedWeek: (selectedWeek) => set(() => ({ selectedWeek })),
  setMemberId: (memberId) =>
    set((state) => ({ matePost: { ...state.matePost, memberId } })),
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
  setImg: (img) => set((state) => ({ matePost: { ...state.matePost, img } })),
  setTeamId: (teamId) =>
    set((state) => ({ matePost: { ...state.matePost, teamId } })),
}))
