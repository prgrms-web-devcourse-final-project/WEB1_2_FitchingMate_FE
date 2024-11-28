export interface Review {
  isReviewed: boolean
  username: string
  review_content?: string | undefined
  rating?: 'GOOD' | 'GREAT' | 'BAD' | undefined
}
export interface MatchInfo {
  match_time: string
  home_team_id: string
  away_team_id: string
  location: string
  review_list: Review[]
}
