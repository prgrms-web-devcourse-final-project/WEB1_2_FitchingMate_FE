import React from 'react'
import { GoodsBottomButton } from '../style'

const GoodsHostButton = ({
  onClickDeleteButton,
  onClickEditButton,
}: {
  onClickDeleteButton: () => void
  onClickEditButton: () => void
}) => {
  return (
    <>
      <GoodsBottomButton
        $isNavy={true}
        onClick={onClickDeleteButton}
      >
        삭제하기
      </GoodsBottomButton>
      <GoodsBottomButton
        $isNavy={true}
        onClick={onClickEditButton}
      >
        수정하기
      </GoodsBottomButton>
    </>
  )
}

export default GoodsHostButton
