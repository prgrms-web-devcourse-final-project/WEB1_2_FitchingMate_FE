import React, { forwardRef } from 'react'
import { ModalDialog } from './style'

interface ModalPropTypes {
  children: React.ReactNode
}

const BottomModal = forwardRef<HTMLDialogElement, ModalPropTypes>(
  ({ children }, ref) => {
    if (!ref || !('current' in ref)) return null

    const closeModal = (e: React.MouseEvent) => {
      if (e.target === ref.current) {
        ref.current?.close()
      }
    }

    return (
      <ModalDialog
        ref={ref}
        onClick={closeModal}
      >
        {children}
      </ModalDialog>
    )
  },
)

export default BottomModal
