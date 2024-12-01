import { ImageCardContainer } from './style'

interface ImageCardProps {
  image: File | null
  index?: number
  isMultiple?: boolean
  oneDeleteImage: (index?: number) => void
  onDragDrop?: (e: React.DragEvent, index: number) => void
  onDragStart?: (e: React.DragEvent<HTMLDivElement>, id: number) => void
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void
}

const ImageCard = ({
  image,
  index,
  isMultiple = true,
  oneDeleteImage,
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
        draggable={isMultiple}
        onDragStart={(e) => onDragStart && index && onDragStart(e, index)}
        onDrop={(e) => onDragDrop && index && onDragDrop(e, index)}
        onDragOver={(e) => onDragOver && onDragOver(e)}
        onDragEnd={(e) => onDragEnd && onDragEnd(e)}
      />
      <button
        onClick={
          isMultiple ? () => oneDeleteImage(index) : () => oneDeleteImage
        }
      >
        X
      </button>
    </ImageCardContainer>
  )
}

export default ImageCard
