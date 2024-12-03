export interface Match {
  id: number
  homeTeam: {
    id: number
    teamName: string
  }
  awayTeam: {
    id: number
    teamName: string
  }
  location: string
  matchTime: string
  isCanceled: boolean
  status: string
  weather: {
    temperature: number
    pop: number
    cloudiness: number
    wtTime: string
  }
  homeScore: number | null
  awayScore: number | null
  result: string | null
}

export interface WeeklyMatchList {
  weekNumber: number
  weekLabel: string
  weekStartDate: string
  weekEndDate: string
  matches: Match[]
}
export interface WeeklyMatchListResponse {
  data: WeeklyMatchList[]
  status: string
  timestamp: string
  message: string | null
}

export interface Goods {
  id: number
  teamName: string
  title: string
  category: string
  price: number
  imageUrl: string
}
export interface GoodsData {
  content: Goods[]
  totalPages: number
  totalElements: number
  hasNext: boolean
  pageNumber: number
  pageSize: number
}
export interface GoodsListResponse {
  status: string
  message: string | null
  data: GoodsData
  timestamp: string
  code: number
}

export interface GoodsDetail {
  id: number
  seller: {
    memberId: number
    nickname: string
    manner: number
    role: string
    imageUrl: string
  }
  buyer: null
  teamName: string
  title: string
  category: string
  price: number
  content: string
  location: {
    placeName: string
    longitude: string
    latitude: string
  }
  imageUrls: string[]
  status: string
}

export interface GoodsDetailResponse {
  status: string
  message: string | null
  data: GoodsDetail
  timestamp: string
  code: number
}
