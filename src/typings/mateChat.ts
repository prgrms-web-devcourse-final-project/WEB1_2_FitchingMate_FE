export interface MateChatRoomDetailResponse {
  status: string
  data: {
    roomId: number
    matePostId: number
    memberId: number
    currentMembers: number
    isRoomActive: boolean
    isMessageable: boolean
    isAuthorLeft: boolean
    isAuthor: boolean
    initialMessages: InitialMessage
  }
  timestamp: string
  code: number
}

interface InitialMessage {
  content: Message[]
  totalPages: number
  totalElements: number
  hasNext: boolean
  pageNumber: number
  pageSize: number
}

interface Message {
  messageId: number
  roomId: number
  senderId: number
  senderNickname: string
  message: string
  messageType: string
  senderImageUrl: string
  sendTime: string
}

export interface MateChatRoomListResponse {
  status: string
  data: {
    content: MateChatRoomList[]
    totalPages: number
    totalElements: number
    hasNext: boolean
    pageNumber: number
    pageSize: number
  }
  timestamp: string
  code: number
}

export interface MateChatRoomList {
  roomId: number
  postId: number
  postImageUrl: string
  postTitle: string
  lastMessageContent: string
  lastMessageTime: string
  currentMembers: number
  isActive: boolean
  isMessageable: boolean
  isAuthorLeft: boolean
  isAuthor: boolean
}

export interface MateChatRoomDetail {
  status: string
  data: {
    content: Message[]
    totalPages: number
    totalElements: number
    hasNext: boolean
    pageNumber: number
    pageSize: number
  }
  timestamp: string
  code: number
}
