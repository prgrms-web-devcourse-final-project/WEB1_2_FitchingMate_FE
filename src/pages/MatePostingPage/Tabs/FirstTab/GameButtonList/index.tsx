import { GameButton, GameButtonContainer, GameSection } from './style'

import GameList from '../GameList'

import useWeeklyMatch from '@hooks/useWeeklyMatch'
import { useMateFormStore } from '@store/useMateFormStore'

const GameButtonList = () => {
  const {
    matePost: { teamId },
    selectedWeek,
    setSelectedWeek,
  } = useMateFormStore()

  const handleClickGameButton = (weekIndex: number) => {
    setSelectedWeek(weekIndex)
  }

  const { weeklyMatchData, isLoading, isError, error } = useWeeklyMatch(teamId)

  return (
    <GameSection>
      <label htmlFor='match_id'>다가오는 경기</label>

      <GameButtonContainer>
        {teamId &&
          weeklyMatchData?.map(({ weekLabel, weekNumber }) => (
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
    </GameSection>
  )
}

export default GameButtonList
