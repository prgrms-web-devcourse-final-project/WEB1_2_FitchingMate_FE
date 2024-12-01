import MatePostModel from '@utils/Model/matePostModel'
import { create } from 'zustand'

interface MateFormStore {
  matePost: MatePostModel
  selectedWeek: number

  setMemberId: (memberId: number) => void
  setTeamId: (teamId: number) => void
  setMatchId: (matchId: number) => void
  setTitle: (title: string) => void
  setContent: (content: string) => void
  setAge: (age: string) => void
  setParticipants: (maxParticipant: number) => void
  setGender: (gender: string) => void
  setTransportation: (transport: string) => void
  setSelectedWeek: (selectedWeek: number) => void
}

export const useMateFormStore = create<MateFormStore>((set) => ({
  matePost: new MatePostModel(null, null, null, '', '', '', 0, '', '', null),
  selectedWeek: 1,

  setSelectedWeek: (selectedWeek: number) => set(() => ({ selectedWeek })),
  setMemberId: (memberId: number) =>
    set((state) => ({ matePost: { ...state.matePost, memberId } })),
  setMatchId: (matchId: number) =>
    set((state) => ({ matePost: { ...state.matePost, matchId } })),
  setTitle: (title: string) =>
    set((state) => ({ matePost: { ...state.matePost, title } })),
  setContent: (content: string) =>
    set((state) => ({ matePost: { ...state.matePost, content } })),
  setAge: (age: string) =>
    set((state) => ({ matePost: { ...state.matePost, age } })),
  setParticipants: (maxParticipant: number) =>
    set((state) => ({ matePost: { ...state.matePost, maxParticipant } })),
  setGender: (gender: string) =>
    set((state) => ({ matePost: { ...state.matePost, gender } })),
  setTransportation: (transport: string) =>
    set((state) => ({ matePost: { ...state.matePost, transport } })),
  setImg: (img: File | null) =>
    set((state) => ({ matePost: { ...state.matePost, img } })),
  setTeamId: (teamId: number) =>
    set((state) => ({ matePost: { ...state.matePost, teamId } })),
}))
