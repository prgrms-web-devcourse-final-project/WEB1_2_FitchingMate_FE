import { useGoodsFormStore } from '@store/useGoodsFormStore'
import { SelectOption, SelectOptionList } from './style'
import { kboTeamList } from '@constants/kboInfo'

interface BottomModalOptionProps {
  onSelectTeam: (team: string) => void
}

const BottomModalOption = ({ onSelectTeam }: BottomModalOptionProps) => {
  const { setTeamId } = useGoodsFormStore()
  const [_, ...restTeamList] = kboTeamList

  const handleSelectTeam = (team: string, id: number) => {
    onSelectTeam(team)
    setTeamId(id)
  }

  return (
    <>
      <SelectOptionList>
        {restTeamList.map(({ team, color, id }) => (
          <SelectOption
            key={id}
            $teamColor={color}
            onClick={() => handleSelectTeam(team, id)}
          >
            {team}
          </SelectOption>
        ))}
      </SelectOptionList>
    </>
  )
}

export default BottomModalOption
