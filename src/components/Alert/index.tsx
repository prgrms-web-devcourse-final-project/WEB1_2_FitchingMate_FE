import { forwardRef } from 'react'
import { AlertButtonWrap, AlertDialog, AlertNotice } from './style'
import GlobalButton from '@components/GlobalButton'

interface AlertPropTypes {
  title: string
  notice: string
  actionText: string
  cancelText?: string
  ref: React.RefObject<HTMLDialogElement>
  handleAlertClick?: () => void
}

const Alert = forwardRef<HTMLDialogElement, AlertPropTypes>(
  ({ title, notice, actionText, cancelText, handleAlertClick }, ref) => {
    if (!ref || !('current' in ref)) return null

    const closeModal = async (e: React.MouseEvent) => {
      e.stopPropagation()
      ref.current?.close() // 모달 닫기
    }

    const handleClickActionButton = async (e: React.MouseEvent) => {
      closeModal(e)

      await handleAlertClick?.()
    }

    return (
      <AlertDialog
        ref={ref}
        onClick={closeModal}
      >
        <h2>{title || '알럿 타이틀'}</h2>
        <AlertNotice>{notice || '알럿 명시 내용'}</AlertNotice>
        <AlertButtonWrap>
          <GlobalButton
            $isNavy={true}
            text={actionText}
            onClick={handleClickActionButton}
          />
          <GlobalButton
            text={cancelText}
            onClick={closeModal}
          />
        </AlertButtonWrap>
      </AlertDialog>
    )
  },
)

export default Alert
