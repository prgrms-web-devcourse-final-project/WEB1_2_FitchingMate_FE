import { formatMatchTime } from '@utils/formatDate'
import { GameCard, InputContainer } from './style'
import { Match } from '@typings/db'
import { formatTeamName } from '@utils/formatTeamName'
import { useMateFormStore } from '@store/useMateFormStore'

interface GameListCardProps {
  match: Match
}

const GameListCard = ({ match }: GameListCardProps) => {
  const {
    id: matchId,
    location,
    matchTime,
    awayTeam: { teamName: awayTeamName },
  } = match

  const {
    matePost: { matchId: currentMatchId },
    setMatchId,
  } = useMateFormStore()

  const handleChangeCheckbox = () => {
    setMatchId(matchId)
  }

  return (
    <GameCard>
      <InputContainer>
        <input
          type='checkbox'
          id='match_id'
          checked={currentMatchId === matchId}
          onChange={handleChangeCheckbox}
        />
        <span>{formatTeamName(awayTeamName)}</span>
      </InputContainer>
      <p>{location}</p>
      <p>{formatMatchTime(matchTime)}</p>
    </GameCard>
  )
}

export default GameListCard
