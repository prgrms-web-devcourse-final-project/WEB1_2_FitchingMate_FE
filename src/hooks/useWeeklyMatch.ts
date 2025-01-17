import matchService from '@apis/matchService'
import { useQuery } from '@tanstack/react-query'
import { WeeklyMatchList } from '@typings/db'
import { QUERY_KEY } from '@apis/queryClient'

const useWeeklyMatch = (teamId: number) => {
  const { data, isLoading, isError, error } = useQuery<WeeklyMatchList[]>({
    queryKey: [QUERY_KEY.WEEKLY_MATCH, teamId],
    queryFn: async ({ signal }) =>
      matchService.getMatchList({ teamId, signal }),

    enabled: teamId !== null,
  })

  return { weeklyMatchData: data, isLoading, isError, error }
}

export default useWeeklyMatch
