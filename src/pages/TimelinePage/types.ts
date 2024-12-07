export interface Review {
  memberId: number
  nickname: string
  rating: string | null
  content: string | null
  postId: number
}
export interface MatchInfo {
  awayTeamName: string
  homeTeamName: string
  location: string
  matchTime: string
  matePostId: number
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
