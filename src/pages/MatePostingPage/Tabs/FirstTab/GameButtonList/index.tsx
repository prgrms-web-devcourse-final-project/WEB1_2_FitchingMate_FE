import { GameButton, GameButtonContainer, GameSection } from './style'

import GameList from '../GameList'

import useWeeklyMatch from '@hooks/useWeeklyMatch'
import { useMateFormStore } from '@store/useMateFormStore'
import { GameListPlaceholder } from '../GameList/style'
import { useEffect } from 'react'
import { findWeekNumberByMatchId } from '@utils/formatPostData'
import { useLocation } from 'react-router-dom'

const GameButtonList = () => {
  const {
    matePost: { teamId, matchId },
    selectedWeek,
    setSelectedWeek,
  } = useMateFormStore()

  const { state } = useLocation()

  const handleClickGameButton = (weekIndex: number) => {
    setSelectedWeek(weekIndex)
  }

  const { weeklyMatchData, isLoading, isError, error } = useWeeklyMatch(
    teamId as number,
  )

  useEffect(() => {
    if (state?.isEdit && weeklyMatchData) {
      const weekNumber = findWeekNumberByMatchId(
        weeklyMatchData,
        matchId as number,
      )
      setSelectedWeek(weekNumber)
    }
  }, [weeklyMatchData])

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
