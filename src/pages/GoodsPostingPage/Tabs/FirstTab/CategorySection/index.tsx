import { CategoryContainer, Input, Label } from './style'
import { useState } from 'react'

const CATEGORY_LIST = ['유니폼', '모자', '의류', '잡화', '기념상품']

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <CategoryContainer>
      {CATEGORY_LIST.map((category) => (
        <RadioInput
          key={category}
          id={category}
          name='category'
          value={category}
          checked={selectedCategory === category}
          onClick={() => handleCategoryClick(category)}
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
