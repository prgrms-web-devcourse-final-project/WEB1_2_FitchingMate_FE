import AddImgIcon from '@assets/icon/image_plus.svg?react'
import { ImgLabel } from './style'

interface ImageInputProps {
  maxCount: number
  currentCount: number
  multiple?: boolean
  disabled: boolean
  onChangeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageInput = ({
  maxCount,
  currentCount,
  multiple = false,
  disabled,
  onChangeImage,
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
        multiple={multiple}
        id='category-img'
        onChange={onChangeImage}
        disabled={disabled}
      />
    </ImgLabel>
  )
}

export default ImageInput
