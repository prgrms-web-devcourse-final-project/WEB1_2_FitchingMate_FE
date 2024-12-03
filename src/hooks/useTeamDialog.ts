import { useRef, useState } from 'react'

const useTeamDialog = () => {
  const [selectedTeam, setSelectedTeam] = useState('')

  const bottomModalRef = useRef<HTMLDialogElement>(null)

  const handleClickSelectButton = () => {
    bottomModalRef.current?.showModal()
  }

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team)
    bottomModalRef.current?.close()
  }

  return {
    selectedTeam,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  }
}

export default useTeamDialog
