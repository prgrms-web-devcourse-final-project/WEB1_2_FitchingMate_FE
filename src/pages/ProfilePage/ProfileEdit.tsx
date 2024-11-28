import Form from '@components/Form'
import {
  ProfileEditInputWrap,
  ProfileImageEdit,
  ProfileImageEditWrap,
} from './style'

import Camera from '@assets/icon/camera.svg?react'
import Select from '@assets/icon/down.svg?react'
import { useRef, useState } from 'react'
import BottomModal from '@components/BottomModal'
import TeamSelectModal from '@components/TeamSelectModal'
import useTeamDialog from '@hooks/useTeamDialog'
import BottomModalOption from './BottomModalOption'

const ProfileEdit = () => {
  const [isUpload, setIsUpload] = useState(false)
  const [profileImg, setProfileImg] = useState<string | undefined>(undefined)
  const [userNickName, setUserNickName] = useState<string>('빌터')
  const [textareaValue, setTextareaValue] = useState('저는 빌터 인간 입니다')

  const {
    selectedTeam,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  } = useTeamDialog()

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (files) {
      let image = window.URL.createObjectURL(files[0])
      console.log(image)
      setProfileImg(image)
      setIsUpload(true)
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('nickname', userNickName)
    formData.append('content', textareaValue)
    formData.append('team', selectedTeam)
    profileImg && formData.append('image_url', profileImg.replace('blob:', ''))

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }
  }

  return (
    <form
      onSubmit={(e) => {
        onSubmit(e)
      }}
    >
      <ProfileImageEditWrap>
        <ProfileImageEdit htmlFor='edit_img'>
          {!isUpload ? (
            <img
              src='https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20240206075441_1b54f931528a9d36c98db236a5e19d74.jpg'
              alt=''
            />
          ) : (
            <img
              src={profileImg}
              alt=''
            />
          )}
          <div>
            <Camera />
          </div>
        </ProfileImageEdit>
        <input
          type='file'
          name=''
          id='edit_img'
          style={{ display: 'none' }}
          accept='image/gif, image/jpeg, image/png'
          onChange={(e) => {
            onImageUpload(e)
          }}
        />
      </ProfileImageEditWrap>
      <ProfileEditInputWrap>
        <label htmlFor='edit_nickname'>닉네임</label>
        <input
          type='text'
          id='edit_nickname'
          value={userNickName}
          onChange={(e) => {
            setUserNickName(e.target.value)
          }}
        ></input>
      </ProfileEditInputWrap>
      <ProfileEditInputWrap>
        <label htmlFor='edit_notice'>소개글</label>
        <textarea
          name=''
          id='edit_notice'
          value={textareaValue}
          onChange={(e) => {
            setTextareaValue(e.target.value)
          }}
        ></textarea>
      </ProfileEditInputWrap>

      <ProfileEditInputWrap>
        <label>마이 팀</label>
        <div onClick={handleClickSelectButton}>
          <span>{selectedTeam}</span>
          <Select />
        </div>
      </ProfileEditInputWrap>

      <BottomModal ref={bottomModalRef}>
        <BottomModalOption onClose={handleTeamSelect} />
      </BottomModal>

      <button>임시버튼</button>
    </form>
  )
}

export default ProfileEdit
