import { WeeklyMatchListResponse } from '@typings/db'
import fetchApi from './ky'

const matchService = {
  getMatchList: async (teamId: number) => {
    const response = await fetchApi
      .get<WeeklyMatchListResponse>(`matches/team/${teamId}/weekly`)
      .json()

    return response.data
  },
}

export default matchService
