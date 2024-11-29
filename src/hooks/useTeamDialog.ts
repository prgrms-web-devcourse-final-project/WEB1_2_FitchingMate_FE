import { useEffect, useRef, useState } from 'react'

const initialTeamState = {
  team: '',
  teamId: 0,
}
interface HandleTeamSelectProps {
  team: string
  teamId: number
  callback?: (teamId: number) => void
}

const useTeamDialog = () => {
  const [selectedTeam, setSelectedTeam] = useState(initialTeamState)

  const bottomModalRef = useRef<HTMLDialogElement>(null)

  const handleClickSelectButton = () => {
    bottomModalRef.current?.showModal()
  }

  const handleTeamSelect = ({
    team,
    teamId,
    callback,
  }: HandleTeamSelectProps) => {
    setSelectedTeam({ team, teamId })
    callback?.(teamId)

    bottomModalRef.current?.close()
  }

  return {
    selectedTeam: selectedTeam.team,
    selectedTeamId: selectedTeam.teamId,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  }
}

export default useTeamDialog
