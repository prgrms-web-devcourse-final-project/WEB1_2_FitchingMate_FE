import { ImageCardContainer } from './style'

interface ImageCardProps {
  image: File
  index: number
  oneDeleteImage: (index: number) => void
  onDragDrop: (e: React.DragEvent, index: number) => void
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void
}

const ImageCard = ({
  image,
  index,
  oneDeleteImage,
  onDragDrop,
  onDragStart,
  onDragOver,
  onDragEnd,
}: ImageCardProps) => {
  const formatImage = URL.createObjectURL(image)

  return (
    <ImageCardContainer>
      <img
        src={formatImage}
        draggable
        onDragStart={(e) => onDragStart(e, index)}
        onDrop={(e) => onDragDrop(e, index)}
        onDragOver={(e) => onDragOver(e)}
        onDragEnd={(e) => onDragEnd(e)}
      />
      <button onClick={() => oneDeleteImage(index)}>X</button>
    </ImageCardContainer>
  )
}

export default ImageCard
