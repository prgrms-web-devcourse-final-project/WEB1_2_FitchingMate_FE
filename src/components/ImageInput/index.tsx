import AddImgIcon from '@assets/icon/image_plus.svg?react'
import { ImgLabel } from './style'

interface ImageInputProps {
  maxCount: number
  currentCount: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageInput = ({ maxCount, currentCount, onChange }: ImageInputProps) => {
  return (
    <ImgLabel>
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
        id='category-img'
        onChange={onChange}
      />
    </ImgLabel>
  )
}

export default ImageInput
