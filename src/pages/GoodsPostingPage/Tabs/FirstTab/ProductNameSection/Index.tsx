import { ProductNameContainer } from './style'
import { useGoodsFormStore } from '@store/useGoodsFormStore'

const ProductNameSection = () => {
  const title = useGoodsFormStore((state) => state.goods.title)
  const setTitle = useGoodsFormStore((state) => state.setTitle)

  const MAX_LENGTH = 25

  const validateProductName = (value: string) => {
    return value.trim().length <= MAX_LENGTH
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (validateProductName(value)) {
      setTitle(value)
    }
  }

  return (
    <ProductNameContainer>
      <label htmlFor='title'>상품 이름</label>
      <input
        type='text'
        id='title'
        value={title}
        onChange={handleChange}
      />
      <p>
        {title.length}/{MAX_LENGTH}
      </p>
    </ProductNameContainer>
  )
}

export default ProductNameSection
