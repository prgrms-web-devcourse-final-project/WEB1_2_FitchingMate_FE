import { GoodsBottomButton } from '../style'

const GoodsVisitorButton = ({
  createGoodsChatroom,
  isDisable,
}: {
  createGoodsChatroom: () => void
  isDisable: boolean
}) => {
  return (
    <GoodsBottomButton
      type='button'
      $isNavy={true}
      onClick={() => (isDisable ? null : createGoodsChatroom())}
      disabled={isDisable}
    >
      대화 나누기
    </GoodsBottomButton>
  )
}

export default GoodsVisitorButton
