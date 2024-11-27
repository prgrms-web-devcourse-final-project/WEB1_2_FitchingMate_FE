import { ImageContainer, ImageList } from './style'

import ImageCard from './ImageCard'
import ImageInput from '@components/ImageInput'
import useImageChange from '@hooks/useImageChange'

const ImageSection = () => {
  const MAX_IMAGE_COUNT = 15

  const { imageList, handleChangeImage, handleDeleteImage } =
    useImageChange(MAX_IMAGE_COUNT)

  const inputDisabled = imageList.length >= MAX_IMAGE_COUNT

  return (
    <ImageContainer>
      <ImageInput
        maxCount={MAX_IMAGE_COUNT}
        currentCount={imageList.length}
        onChange={handleChangeImage}
        disabled={inputDisabled}
        multiple
      />

      <ImageList>
        {imageList?.map((image, index) => (
          <ImageCard
            key={`${image.name}-${index}`}
            image={image}
            handleDeleteImage={() => handleDeleteImage(index)}
          />
        ))}
      </ImageList>
    </ImageContainer>
  )
}

export default ImageSection
