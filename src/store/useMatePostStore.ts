import MatePostModel from '@utils/Model/matePostModel'
import { create } from 'zustand'

interface MatePostStore {
  matePost: MatePostModel

  setMemberId: (memberId: number) => void
  setTemaId: (temaId: number) => void
  setMatchId: (matchId: number) => void
  setTitle: (title: string) => void
  setContent: (content: string) => void
  setAge: (age: string) => void
  setMaxParticipant: (maxParticipant: number) => void
  setGender: (gender: string) => void
  setTransport: (transport: string) => void
}

export const useMatePostStore = create<MatePostStore>((set) => ({
  matePost: new MatePostModel(0, 0, 0, '', '', '', 0, '', '', null),

  setMemberId: (memberId: number) =>
    set((state) => ({ matePost: { ...state.matePost, memberId } })),
  setTemaId: (temaId: number) =>
    set((state) => ({ matePost: { ...state.matePost, temaId } })),
  setMatchId: (matchId: number) =>
    set((state) => ({ matePost: { ...state.matePost, matchId } })),
  setTitle: (title: string) =>
    set((state) => ({ matePost: { ...state.matePost, title } })),
  setContent: (content: string) =>
    set((state) => ({ matePost: { ...state.matePost, content } })),
  setAge: (age: string) =>
    set((state) => ({ matePost: { ...state.matePost, age } })),
  setMaxParticipant: (maxParticipant: number) =>
    set((state) => ({ matePost: { ...state.matePost, maxParticipant } })),
  setGender: (gender: string) =>
    set((state) => ({ matePost: { ...state.matePost, gender } })),
  setTransport: (transport: string) =>
    set((state) => ({ matePost: { ...state.matePost, transport } })),
  setImg: (img: File | null) =>
    set((state) => ({ matePost: { ...state.matePost, img } })),
}))
