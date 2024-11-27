import { ImageCardContainer } from './style'

interface ImageCardProps {
  image: File
  handleDeleteImage: () => void
}

const ImageCard = ({ image, handleDeleteImage }: ImageCardProps) => {
  return (
    <ImageCardContainer>
      <img src={URL.createObjectURL(image)} />
      <button onClick={handleDeleteImage}>X</button>
    </ImageCardContainer>
  )
}

export default ImageCard
