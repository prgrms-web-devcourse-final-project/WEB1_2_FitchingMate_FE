import { QueryClient } from '@tanstack/react-query'

const defaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: Infinity,
  },
}

const queryClient = new QueryClient({
  defaultOptions,
})

export const QUERY_KEY = {
  WEEKLY_MATCH: 'weeklyMatch',
  GOODS_LIST: 'goodsList',
  MATE_LIST: 'mateList',
  MATE_POST: 'matePost',
  USER_INFO: 'userInfo',
  MY_INFO: 'myInfo',
  RANKINGS: 'rankings',
  COMPLETED_MATCHES: 'completedMatches',
  GOODS_POST: 'goodsPost',
  MATE_REVIEW: 'mateReview',
  GOODS_REVIEW: 'goodsReview',
  TIMELINE_LIST: 'timelineList',
}

export default queryClient
