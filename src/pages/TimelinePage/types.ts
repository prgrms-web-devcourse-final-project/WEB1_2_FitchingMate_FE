export interface Review {
  memberId: number
  nickname: string
  rating: string | null
  content: string | null
}
export interface MatchInfo {
  awayTeamName: string
  homeTeamName: string
  location: string
  matchTime: string
  reviews: Review[]
}

export interface TimelineResponse {
  content: MatchInfo[]
  hasNext: boolean
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}
