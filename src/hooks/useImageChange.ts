import { useState } from 'react'

const useImageChange = (maxLength: number) => {
  const [imageList, setImageList] = useState<File[]>([])

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

  const handleDeleteImage = (index: number) => {
    const newImageList = imageList.filter((_, i) => i !== index)
    setImageList(newImageList)
  }

  return { imageList, handleChangeImage, handleDeleteImage }
}

export default useImageChange
