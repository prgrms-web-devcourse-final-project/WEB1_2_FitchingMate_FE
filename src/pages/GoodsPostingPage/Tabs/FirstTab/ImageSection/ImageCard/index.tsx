import { ImageCardContainer } from './style'

interface ImageCardProps {
  image: File | null
  index: number
  onDeleteImage: (index: number) => void
  onDragDrop: (e: React.DragEvent, index: number) => void
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void
}

const ImageCard = ({
  image,
  index,
  onDeleteImage,
  onDragDrop,
  onDragStart,
  onDragOver,
  onDragEnd,
}: ImageCardProps) => {
  if (image === null) return

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
      <button onClick={() => onDeleteImage(index)}>X</button>
    </ImageCardContainer>
  )
}

export default ImageCard
