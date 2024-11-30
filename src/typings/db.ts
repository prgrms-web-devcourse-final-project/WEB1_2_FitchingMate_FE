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
