import { useMateFormStore } from '@store/useMateFormStore'
import { ProductNameContainer } from '@pages/GoodsPostingPage/Tabs/FirstTab/ProductNameSection/style'

const MAX_LENGTH = 20

const InputSection = () => {
  const {
    matePost: { title },
    setTitle,
  } = useMateFormStore()

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length <= MAX_LENGTH) {
      setTitle(value)
    }
  }
  return (
    <ProductNameContainer>
      <label htmlFor='title'>모집명</label>
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
