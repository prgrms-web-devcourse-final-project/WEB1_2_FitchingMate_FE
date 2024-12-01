import { WeeklyMatchListResponse } from '@typings/db'
import fetchApi from './ky'

const matchService = {
  getMatchList: async ({
    teamId,
    signal,
  }: {
    teamId: number
    signal: AbortSignal
  }) => {
    const response = await fetchApi
      .get(`matches/team/${teamId}/weekly`, { signal })
      .json<WeeklyMatchListResponse>()

    return response.data
  },
}

export default matchService
