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
export interface GoodsPostSummary {
  id: number;
  teamName: string;
  title: string;
  category: string;
  price: number | string;
  imageUrl: string | null;
}

export interface MateCardData {
  imageUrl: string | null;
  title: string;
  status: string;
  myTeamName: string;
  rivalTeamName: string;
  matchTime: string;
  location: string;
  maxParticipants: number;
  age: string;
  gender: string;
  transportType: string;
  postId: number;
}

export interface MateCardResponse {
  status: string;
  message: string | null;
  data: MateCardData[];
  timestamp: string;
  code: number;
}

export interface TeamRanking {
  id: number;
  teamName: string;
  rank: number;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  gamesBehind: number;
}
