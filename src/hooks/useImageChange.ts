import { useGoodsFormStore } from '@store/useGoodsFormStore'

const useImageChange = (maxLength: number) => {
  const imageList = useGoodsFormStore((state) => state.goods.imageList)
  const setImageList = useGoodsFormStore((state) => state.setImageList)

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentLength = imageList.length
    const currentFiles = Array.from(e.target.files || [])

    if (currentLength + currentFiles.length > maxLength) {
      // 최대 이미지 개수를 초과하는 경우 초과되는 이미지 제외
      const newFiles = currentFiles.slice(0, maxLength - currentLength)

      setImageList([...imageList, ...newFiles])
      return
    }

    setImageList([...imageList, ...currentFiles])
  }

  const handleDeleteImage = async (index: number) => {
    const newImageList = imageList.filter((_, i) => i !== index)

    setImageList(newImageList)
  }

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('imgIndex', id.toString())

    if (e.currentTarget instanceof HTMLElement) {
      // e.currentTarget.style.opacity = '0.5'
      e.currentTarget.style.border = '2px solid #002561'
    }
  }

  const onDragDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault()

    const currentIndex = Number(e.dataTransfer.getData('imgIndex'))

    if (currentIndex === index) return

    const updateImages = [...imageList]
    const [movedImage] = updateImages.splice(currentIndex, 1)

    updateImages.splice(index, 0, movedImage)

    setImageList(updateImages)
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    // 스타일 초기화
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.border = 'none'
    }
  }

  return {
    imageList,
    handleChangeImage,
    handleDeleteImage,
    onDragDrop,
    onDragStart,
    onDragOver,
    onDragEnd,
  }
}

export default useImageChange
