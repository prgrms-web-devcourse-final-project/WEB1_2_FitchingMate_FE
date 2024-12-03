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
  MATE_POST: 'matePost',
  USER_INFO: 'userInfo',
  MY_INFO: 'myInfo',
  RANKINGS: 'rankings',
  COMPLETED_MATCHES: 'completedMatches',
}

export default queryClient
