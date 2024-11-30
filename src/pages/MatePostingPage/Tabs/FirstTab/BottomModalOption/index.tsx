import { kboTeamList } from '@constants/kboInfo'
import { SelectOption, SelectOptionList } from './style'
import { useMateFormStore } from '@store/useMateFormStore'

interface BottomModalOptionProps {
  onCloseBottomModal: () => void
}

const BottomModalOption = ({ onCloseBottomModal }: BottomModalOptionProps) => {
  const [_, ...restTeamList] = kboTeamList
  const { setTeamId, setSelectedWeek } = useMateFormStore()

  const handleSelectTeam = (teamId: number) => {
    setTeamId(teamId)
    setSelectedWeek(1)
    onCloseBottomModal()
  }

  return (
    <>
      <SelectOptionList>
        {restTeamList.map(({ team, color, id }) => (
          <SelectOption
            key={id}
            $teamColor={color}
            onClick={() => handleSelectTeam(id)}
          >
            {team}
          </SelectOption>
        ))}
      </SelectOptionList>
    </>
  )
}

export default BottomModalOption
