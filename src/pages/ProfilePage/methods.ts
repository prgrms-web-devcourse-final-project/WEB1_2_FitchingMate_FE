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
  setProfileImg: Dispatch<SetStateAction<string | undefined>>,
  setIsUpload: Dispatch<SetStateAction<boolean>>,
) => void

export const onProfileEditSubmit: OnSubmitTypes = (
  e,
  userNickName,
  textareaValue,
  selectedTeam,
  profileImg?,
) => {
  e.preventDefault()

  const formData = new FormData()

  formData.append('nickname', userNickName)
  formData.append('content', textareaValue)
  formData.append('team', selectedTeam)
  profileImg && formData.append('image_url', profileImg.replace('blob:', ''))

  const pushForm = Object.fromEntries(formData)
  console.log(pushForm)
}

export const handleImageUpload: HandleImageUploadTypes = (
  e,
  setProfileImg,
  setIsUpload,
) => {
  const { files } = e.target
  if (files) {
    let image = window.URL.createObjectURL(files[0])
    setProfileImg(image)
    setIsUpload(true)
  }
}
