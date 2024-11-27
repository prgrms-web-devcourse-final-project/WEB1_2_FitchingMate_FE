import { ImageContainer, ImageList } from './style'

import ImageCard from './ImageCard'
import ImageInput from '@components/ImageInput'
import useImageChange from '@hooks/useImageChange'

const ImageSection = () => {
  const { imageList, handleChangeImage, handleDeleteImage } = useImageChange()

  return (
    <ImageContainer>
      <ImageInput
        maxCount={5}
        currentCount={imageList.length}
        onChange={handleChangeImage}
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
