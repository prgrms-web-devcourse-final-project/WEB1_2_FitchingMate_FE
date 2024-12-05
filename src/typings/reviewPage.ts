export interface ReviewContent {
  content: string
  createdAt: string
  nickname: string
  postId: number
  rating: 'BAD' | 'GOOD' | 'GREAT'
  title: string
}

interface ReviewPage {
  content: ReviewContent[]
  hasNext: boolean
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}
interface ReviewPageData {
  pages: ReviewPage[]
  pageParams: number[]
}
