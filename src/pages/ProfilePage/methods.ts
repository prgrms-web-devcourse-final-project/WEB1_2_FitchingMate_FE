import useEditMyInfo from '@hooks/useEditMyInfo'
import { Dispatch, SetStateAction } from 'react'

type OnSubmitTypes = (
  e: React.FormEvent<HTMLFormElement>,
  userNickName: string,
  textareaValue: string,
  selectTeam: string,
  profileImg?: string,
) => void

type HandleImageUploadTypes = (
  e: React.ChangeEvent<HTMLInputElement>,
  setProfileImg: Dispatch<SetStateAction<File | undefined>>,
  setProfileImgSrc: Dispatch<SetStateAction<string | undefined>>,
  setIsUpload: Dispatch<SetStateAction<boolean>>,
) => void

export const handleImageUpload: HandleImageUploadTypes = (
  e,
  setProfileImg,
  setProfileImgSrc,
  setIsUpload,
) => {
  const { files } = e.target
  if (files) {
    const uploadFile = files[0]
    const imgSrc = window.URL.createObjectURL(files[0])
    setProfileImgSrc(imgSrc)
    setProfileImg(uploadFile)
    setIsUpload(true)
  }
}
