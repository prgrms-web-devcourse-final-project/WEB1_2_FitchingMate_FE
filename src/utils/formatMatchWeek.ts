export const formatMatchWeek = (matchId: number) => {
  if (matchId <= 5) return 1
  if (5 < matchId && matchId <= 10) return 2
  if (10 < matchId && matchId <= 15) return 3
  if (15 < matchId && matchId <= 20) return 4
}
