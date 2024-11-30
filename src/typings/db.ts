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

export interface GoodsPost {
  memberId: number | null
  teamId: number | null
  title: string
  content: string
  age: string
  maxParticipants: string
  gender: string
  transportType: string
  matchId: number | null
}

export interface GoodsForm {
  data: GoodsPost
  file: File | null
}
