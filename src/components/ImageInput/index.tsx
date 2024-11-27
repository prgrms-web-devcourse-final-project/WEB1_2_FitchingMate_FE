import AddImgIcon from '@assets/icon/image_plus.svg?react'
import { ImgLabel } from './style'

interface ImageInputProps {
  maxCount: number
  currentCount: number
  multiple?: boolean
  disabled: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageInput = ({
  maxCount,
  currentCount,
  multiple,
  disabled,
  onChange,
}: ImageInputProps) => {
  return (
    <ImgLabel $disabled={disabled}>
      <div>
        <AddImgIcon
          width={30}
          height={30}
        />
        <p>
          {currentCount}/{maxCount}
        </p>
      </div>
      <input
        type='file'
        accept='image/*'
        multiple={multiple || false}
        id='category-img'
        onChange={onChange}
        disabled={disabled}
      />
    </ImgLabel>
  )
}

export default ImageInput
