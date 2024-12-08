import { create } from 'zustand'

interface UserInfo {
  age: number | null
  gender: string
  memberId: number | null
  nickname: string
  teamId: number | null
}

interface UserStore {
  userInfo: UserInfo

  setAge: (age: number) => void
  setGender: (gender: string) => void
  setMemberId: (memberId: number) => void
  setNickname: (nickname: string) => void
  setTeamId: (teamId: number) => void
}

const initialState = {
  userInfo: {
    age: null,
    gender: '',
    memberId: null,
    nickname: '',
    teamId: null,
  },
}

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,

  setAge: (age) => set((state) => ({ userInfo: { ...state.userInfo, age } })),
  setGender: (gender) =>
    set((state) => ({ userInfo: { ...state.userInfo, gender } })),
  setMemberId: (memberId) =>
    set((state) => ({ userInfo: { ...state.userInfo, memberId } })),
  setNickname: (nickname) =>
    set((state) => ({ userInfo: { ...state.userInfo, nickname } })),
  setTeamId: (teamId) =>
    set((state) => ({ userInfo: { ...state.userInfo, teamId } })),
}))
