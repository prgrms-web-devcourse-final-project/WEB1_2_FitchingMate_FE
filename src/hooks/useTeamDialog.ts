import { useRef, useState } from 'react'

const initialState: {
  teamName: string
  teamId: null | number
} = {
  teamName: '',
  teamId: null,
}

const useTeamDialog = () => {
  const [selectedTeam, setSelectedTeam] = useState(initialState)

  const bottomModalRef = useRef<HTMLDialogElement>(null)

  const handleClickSelectButton = () => {
    bottomModalRef.current?.showModal()
  }

  const handleTeamSelect = (team: string, id: number) => {
    setSelectedTeam({ teamName: team, teamId: id })
    bottomModalRef.current?.close()
  }

  return {
    selectedTeam: selectedTeam.teamName,
    selectedTeamId: selectedTeam.teamId,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  }
}

export default useTeamDialog
