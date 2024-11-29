import { kboTeamList } from '@utils/kboInfo'
import { SelectOption, SelectOptionList } from './style'

interface BottomModalOptionProps {
  onClose: ({
    team,
    teamId,
    callback,
  }: {
    team: string
    teamId: number
    callback?: (teamId: number) => void
  }) => void

  callback?: (teamId: number) => void
}

const BottomModalOption = ({ onClose, callback }: BottomModalOptionProps) => {
  return (
    <>
      <SelectOptionList>
        {kboTeamList.map(({ team, color, id }) => (
          <SelectOption
            key={id}
            $teamColor={color}
            onClick={() =>
              onClose({ team, teamId: id, callback: () => callback?.(id) })
            }
          >
            {team}
          </SelectOption>
        ))}
      </SelectOptionList>
    </>
  )
}

export default BottomModalOption
