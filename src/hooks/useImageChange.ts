import { useState } from 'react'

const useImageChange = () => {
  const [imageList, setImageList] = useState<File[]>([])

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setImageList([...imageList, file])
  }

  const handleDeleteImage = (index: number) => {
    const newImageList = imageList.filter((_, i) => i !== index)
    setImageList(newImageList)
  }

  return { imageList, handleChangeImage, handleDeleteImage }
}

export default useImageChange
