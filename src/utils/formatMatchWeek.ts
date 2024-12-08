import { WeeklyMatchList } from '@typings/db'

const findWeekByMatchId = (
  weeklyMatchData: WeeklyMatchList[],
  targetId: number,
): number | null => {
  for (let i = 0; i < weeklyMatchData.length; i++) {
    const matchExists = weeklyMatchData[i].matches.some(
      (match) => match.id === targetId,
    )
    if (matchExists) {
      return weeklyMatchData[i].weekNumber
    }
  }
  return null
}

export default findWeekByMatchId
