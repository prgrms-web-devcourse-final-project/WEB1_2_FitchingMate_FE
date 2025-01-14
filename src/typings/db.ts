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

export interface Seller {
  memberId?: number
  nickname: string
  manner: number
  role: string
  imageUrl: string
  authorId?: number
}

export interface Location {
  placeName: string
  longitude: string
  latitude: string
}

export interface GoodsDetail {
  id: number
  seller: Seller
  buyer: null | string // 구매자가 없을 경우 null
  teamName: string
  title: string
  category: string
  price: number
  content: string
  location: Location
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

export interface MatePostData {
  matchId: number
  postImageUrl: string
  title: string
  status: string
  myTeamName: string
  rivalTeamName: string
  rivalMatchTime: string
  location: string
  age: string
  gender: string
  transportType: string
  maxParticipants: number
  userImageUrl: string
  nickname: string
  manner: number
  content: string
  postId: number
  authorId: number
  currentChatMembers: number
}

export interface MatePostResponse {
  status: string
  message: string | null
  data: MatePostData
  timestamp: string
  code: number
}
export interface GoodsPostSummary {
  id: number
  teamName: string
  title: string
  category: string
  price: number
  imageUrl: string | null
}

export interface MateCardData {
  imageUrl: string | null
  title: string
  status: string
  myTeamName: string
  rivalTeamName: string
  matchTime: string
  location: string
  maxParticipants: number
  age: string
  gender: string
  transportType: string
  postId: number
}

export interface MateCardResponse {
  status: string
  message: string | null
  data: MateCardData[]
  timestamp: string
  code: number
}

export interface TeamRanking {
  id: number
  teamName: string
  rank: number
  gamesPlayed: number
  wins: number
  draws: number
  losses: number
  gamesBehind: number
}

export interface NaverLoginResponse {
  grantType: string
  accessToken: string
  refreshToken: string
  isNewMember: boolean
  naverProfileResponse: NaverProfileResponse
}

export interface NaverProfileResponse {
  name: string
  email: string
  gender: string
  birthyear: string
}

export interface GoodsChatroomContent {
  chatRoomId: number
  opponentNickname: string
  lastChatContent: string
  lastChatSentAt: string
  placeName: string
  goodsMainImageUrl: string
  opponentImageUrl: string
}

export interface GoodsChatroom {
  status: string
  message: string | null
  data: {
    content: GoodsChatroomContent[]
    totalPages: number
    totalElements: number
    hasNext: boolean
    pageNumber: number
    pageSize: number
  }
  timestamp: string
  code: number
}

export interface GoodsChatMessage {
  chatMessageId: number
  roomId: number
  senderId: number
  senderNickname: string
  message: string
  messageType: string
  senderImageUrl: string
  sentAt: string
}

export interface GoodsChatroomData {
  chatRoomId: number
  goodsPostId: number
  teamName: string
  title: string
  category: string
  price: number
  postStatus: string
  chatRoomStatus: string
  imageUrl: string
  goodsSellerId: number
  initialMessages: {
    content: GoodsChatMessage[]
    totalPages: number
    totalElements: number
    hasNext: boolean
    pageNumber: number
    pageSize: number
  }
}
export interface GoodsChatroomResponse {
  status: string
  message: string | null
  data: GoodsChatroomData
  timestamp: string
  code: number
}

export interface GoodsChatParticipant {
  memberId: number
  nickname: string
  imageUrl?: string
}

export interface GoodsChatParticipantResponse {
  status: string
  message: string | null
  data: GoodsChatParticipant[]
  timestamp: string
  code: number
}

export interface GoodsMessage {
  chatMessageId: number
  message: string
  messageType: string
  roomId: number
  senderId: number
  senderImageUrl: string
  senderNickname: string
  sentAt: string
}

export interface GoodsMessageResponse {
  initialMessages: GoodsMessage[]
  hasNext: boolean
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export interface ProfileEditResponse {
  aboutMe: string
  followerCount: number | null
  followingCount: number | null
  goodsBoughtCount: number | null
  goodsSoldCount: number | null
  imageUrl: string
  manner: number | null
  nickname: string
  reviewsCount: number | null
  teamName: string
  visitsCount: number | null
}

export interface ProfileEditApiResponse {
  code: number
  data: ProfileEditResponse
  message: string | null
  status: string
  timestamp: string
}

// userService.getGoodsRecordList

export interface GoodsRecordData {
  postId: number
  title: string
  imageUrl: string
  price: number
  author: string
  createdAt: string
}

export interface GoodsRecordReponse {
  content: GoodsRecordData[]
  hasNext: boolean
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export interface GoodsRecordApiResponse {
  code: number
  data: GoodsRecordReponse
  message: string | null
  status: string
  timestamp: string
}

// reviewService.getReviewList

export interface GetReviewListContent {
  content: string
  createdAt: string
  nickname: string
  postId: number
  rating: string
  title: string
}

export interface GetReviewListResponse {
  content: GetReviewListContent[]
  hasNext: boolean
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export interface GetReviewListApiResponse {
  code: number
  data: GetReviewListResponse
  message: string | null
  status: string
  timestamp: string
}

// reviewService.getTimelineList

export interface TimelineReviewList {
  memberId: number
  nickname: string
  rating: string | null
  content: string | null
}

export interface GetTimelineListContnet {
  awayTeamName: string
  homeTeamName: string
  location: string
  matchTime: string
  matePostId: number
  reviews: TimelineReviewList[]
}

export interface GetTimelineListResponse {
  content: GetTimelineListContnet[]
  hasNext: boolean
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

export interface GetTimelineListApiResponse {
  code: number
  data: GetTimelineListResponse
  message: string | null
  status: string
  timestamp: string
}

export interface GetReviewDetailResponse {
  age: string
  authorId: number
  content: string
  currentChatMembers: number
  gender: string
  location: string
  manner: number
  matchId: number
  maxParticipants: number
  myTeamName: string
  nickname: string
  postId: number
  postImageUrl: string | null
  rivalMatchTime: string
  rivalTeamName: string
  status: string
  title: string
  transportType: string
  userImageUrl: string
}

export interface GetReviewDetailApiResponse {
  code: number
  data: GetReviewDetailResponse
  message: string | null
  status: string
  timestamp: string
}
