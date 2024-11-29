import { useRef, useState } from 'react'

interface TeamDialogProps {
  callback?: (teamId: string) => void
}

const initialTeamState = {
  team: '',
  teamId: '',
}

const useTeamDialog = ({ callback }: TeamDialogProps) => {
  const [selectedTeam, setSelectedTeam] = useState(initialTeamState)

  const bottomModalRef = useRef<HTMLDialogElement>(null)

  const handleClickSelectButton = () => {
    bottomModalRef.current?.showModal()
  }

  const handleTeamSelect = (team: string, teamId: string) => {
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
