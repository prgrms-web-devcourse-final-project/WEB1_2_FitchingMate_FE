export interface UserInfo {
  aboutMe: string
  followerCount: number
  followingCount: number
  goodsBoughtCount?: number
  goodsSoldCount: number
  imageUrl: string
  manner: number
  nickname: string
  reviewsCount: number
  teamName: string
  visitsCount?: number
}

export interface UserDataApiResponse {
  code: number
  data: UserInfo
  message: string | null
  status: string
  timestamp: string
}

export interface MyDataApiReponse {
  code: number
  data: UserInfo
  message: string | null
  status: string
  timestamp: string
}
