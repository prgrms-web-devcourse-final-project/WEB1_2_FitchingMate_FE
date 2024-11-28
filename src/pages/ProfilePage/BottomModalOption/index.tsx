import { TEAM_LIST } from '@components/TeamSelectModal'
import { SelectOption, SelectOptionList, TopOption } from './style'

interface BottomModalOptionProps {
  onClose: (team: string) => void
}

const BottomModalOption = ({ onClose }: BottomModalOptionProps) => {
  return (
    <>
      <TopOption onClick={() => onClose('전체')}>전체</TopOption>
      <SelectOptionList>
        {TEAM_LIST.map((team) => (
          <SelectOption
            key={team.name}
            $teamColor={team.color}
            onClick={() => onClose(team.name)}
          >
            {team.name}
          </SelectOption>
        ))}
      </SelectOptionList>
    </>
  )
}

export default BottomModalOption
