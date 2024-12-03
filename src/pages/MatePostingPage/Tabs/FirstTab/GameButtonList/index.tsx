import { GameButton, GameButtonContainer, GameSection } from './style'

import GameList from '../GameList'

import useWeeklyMatch from '@hooks/useWeeklyMatch'
import { useMateFormStore } from '@store/useMateFormStore'
import { GameListPlaceholder } from '../GameList/style'

const GameButtonList = () => {
  const {
    matePost: { teamId },
    selectedWeek,
    setSelectedWeek,
  } = useMateFormStore()

  const handleClickGameButton = (weekIndex: number) => {
    setSelectedWeek(weekIndex)
  }

  const { weeklyMatchData, isLoading, isError, error } = useWeeklyMatch(
    teamId as number,
  )

  if (teamId === null) {
    return (
      <GameSection>
        <label htmlFor='match_id'>다가오는 경기</label>
        <GameListPlaceholder>응원팀을 선택해주세요.</GameListPlaceholder>
      </GameSection>
    )
  }

  return (
    <GameSection>
      <label htmlFor='match_id'>다가오는 경기</label>
      {weeklyMatchData && (
        <>
          <GameButtonContainer>
            {weeklyMatchData?.map(({ weekLabel, weekNumber }) => (
              <GameButton
                key={weekLabel}
                type='button'
                onClick={() => handleClickGameButton(weekNumber)}
                $isActive={selectedWeek === weekNumber}
                disabled={selectedWeek === weekNumber}
              >
                {weekLabel}
              </GameButton>
            ))}
          </GameButtonContainer>

          <GameList
            weeklyMatchData={weeklyMatchData}
            isLoading={isLoading}
            isError={isError}
            error={error}
          />
        </>
      )}
    </GameSection>
  )
}

export default GameButtonList
