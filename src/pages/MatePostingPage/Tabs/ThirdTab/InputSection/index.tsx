import { useMateFormStore } from '@store/useMateFormStore'
import { ProductNameContainer } from '@pages/GoodsPostingPage/Tabs/FirstTab/ProductNameSection/style'

const MAX_LENGTH = 25

const InputSection = () => {
  const {
    matePost: { title },
    setTitle,
  } = useMateFormStore()

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  return (
    <ProductNameContainer>
      <label htmlFor='title'>상품 이름</label>
      <input
        type='text'
        id='title'
        value={title}
        onChange={handleChangeTitle}
      />
      <p>
        {title.length}/{MAX_LENGTH}
      </p>
    </ProductNameContainer>
  )
}

export default InputSection
