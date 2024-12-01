import { GameListPlaceholder } from './style'
import GameListCard from '../GameListCard'
import { WeeklyMatchList } from '@typings/db'
import { useMateFormStore } from '@store/useMateFormStore'

interface GameListProps {
  weeklyMatchData: WeeklyMatchList[] | undefined
  isLoading: boolean
  isError: boolean
  error: Error | null
}
const GameList = ({
  weeklyMatchData,
  isLoading,
  isError,
  error,
}: GameListProps) => {
  const {
    matePost: { teamId },
    selectedWeek,
  } = useMateFormStore()

  if (teamId === null) {
    return <GameListPlaceholder>응원팀을 선택해주세요.</GameListPlaceholder>
  }

  if (isLoading) {
    return <GameListPlaceholder>Loading...</GameListPlaceholder>
  }

  if (isError) {
    return <GameListPlaceholder>{error?.message}</GameListPlaceholder>
  }

  const matchList = weeklyMatchData?.[selectedWeek - 1].matches

  return (
    <>
      {matchList?.map((match) => (
        <GameListCard
          key={match.id}
          match={match}
        />
      ))}
    </>
  )
}

export default GameList
