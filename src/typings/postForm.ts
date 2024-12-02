export interface Location {
  latitude: string | null
  longitude: string | null
  placeName: string
}

export interface GoodsPost {
  teamId: number | null
  title: string
  content: string
  category: string
  price: string
  location: Location
}

export interface GoodsPostForm {
  data: GoodsPost
  file: File | null
}

export interface MatePost {
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

export interface MatePostForm {
  data: MatePost
  file: File | null
}
