import { ImageContainer, ImageList } from './style'

import ImageCard from './ImageCard'
import ImageInput from '@components/ImageInput'
import useImageChange from '@hooks/useImageChange'

const MAX_IMAGE_COUNT = 15

const ImageSection = () => {
  const { imageList, onChangeImage, onDeleteImage, ...restDragHandler } =
    useImageChange(MAX_IMAGE_COUNT)

  const inputDisabled = imageList.length >= MAX_IMAGE_COUNT

  return (
    <ImageContainer>
      <ImageInput
        maxCount={MAX_IMAGE_COUNT}
        currentCount={imageList.length}
        onChangeImage={onChangeImage}
        disabled={inputDisabled}
        multiple
      />

      <ImageList>
        {imageList?.map((image, index) => (
          <ImageCard
            key={`${image.name}-${index}`}
            image={image}
            index={index}
            {...restDragHandler}
            oneDeleteImage={onDeleteImage}
          />
        ))}
      </ImageList>
    </ImageContainer>
  )
}

export default ImageSection
