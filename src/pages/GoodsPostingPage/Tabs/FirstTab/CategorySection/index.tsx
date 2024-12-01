import { useGoodsFormStore } from '@store/useGoodsFormStore'
import { CategoryContainer, Input, Label } from './style'

const CATEGORY_LIST = ['유니폼', '모자', '의류', '잡화', '기념상품']

const CategorySection = () => {
  const category = useGoodsFormStore((state) => state.goods.category)
  const setCategory = useGoodsFormStore((state) => state.setCategory)

  const handleCategoryClick = (category: string) => {
    setCategory(category)
  }

  return (
    <CategoryContainer>
      {CATEGORY_LIST.map((currentCategory) => (
        <RadioInput
          key={currentCategory}
          id={currentCategory}
          name='category'
          value={currentCategory}
          checked={category === currentCategory}
          onClick={() => handleCategoryClick(currentCategory)}
        />
      ))}
    </CategoryContainer>
  )
}

type RadioInputProps = {
  id: string
  name: string
  value: string
  checked: boolean
  onClick: () => void
}

const RadioInput = ({ id, name, value, checked, onClick }: RadioInputProps) => {
  return (
    <>
      <Input
        type='radio'
        id={id}
        name={name}
        value={value}
        onClick={onClick}
      />
      <Label
        htmlFor={id}
        $checked={checked}
      >
        {value}
      </Label>
    </>
  )
}

export default CategorySection
