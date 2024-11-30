import { useRef } from 'react'

export const useModal = () => {
  const bottomModalRef = useRef<HTMLDialogElement>(null)
  const alertRef = useRef<HTMLDialogElement>(null)

  const handleOpenBottomModal = () => {
    bottomModalRef.current?.showModal()
  }

  const handleAlertClick = () => {
    alertRef.current?.showModal()
  }

  return { bottomModalRef, alertRef, handleOpenBottomModal, handleAlertClick }
}
