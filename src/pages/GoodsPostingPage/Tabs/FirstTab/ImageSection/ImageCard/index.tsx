import { ImageCardContainer } from './style'

interface ImageCardProps {
  image: File
  index: number
  handleDeleteImage: (index: number) => void
  handleDragDrop: (e: React.DragEvent, index: number) => void
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  handleDragEnd: (e: React.DragEvent<HTMLDivElement>) => void
}

const ImageCard = ({
  image,
  index,
  handleDeleteImage,
  handleDragDrop,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
}: ImageCardProps) => {
  return (
    <ImageCardContainer>
      <img
        src={URL.createObjectURL(image)}
        draggable
        onDragStart={(e) => handleDragStart(e, index)}
        onDrop={(e) => handleDragDrop(e, index)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnd={(e) => handleDragEnd(e)}
      />
      <button onClick={() => handleDeleteImage(index)}>X</button>
    </ImageCardContainer>
  )
}

export default ImageCard
