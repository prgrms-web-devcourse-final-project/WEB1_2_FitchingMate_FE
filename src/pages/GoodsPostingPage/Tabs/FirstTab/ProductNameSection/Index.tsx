import useInput from '@hooks/useInput'
import { ProductNameContainer } from './style'

const ProductNameSection = () => {
  const MAX_LENGTH = 25

  const validateProductName = (value: string) => {
    return value.trim().length <= MAX_LENGTH
  }

  const { value, handleChange } = useInput(validateProductName)

  return (
    <ProductNameContainer>
      <label htmlFor='title'>상품 이름</label>
      <input
        type='text'
        id='title'
        value={value}
        onChange={handleChange}
      />
      <p>
        {value.length}/{MAX_LENGTH}
      </p>
    </ProductNameContainer>
  )
}

export default ProductNameSection
