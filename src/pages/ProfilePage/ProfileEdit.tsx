import {
  ProfileEditInputWrap,
  ProfileImageEdit,
  ProfileImageEditWrap,
} from './style'
import { useState } from 'react'
import { handleImageUpload, onProfileEditSubmit } from './methods'

import Camera from '@assets/icon/camera.svg?react'
import Select from '@assets/icon/down.svg?react'
import BottomModal from '@components/BottomModal'
import useTeamDialog from '@hooks/useTeamDialog'
import BottomModalOption from './BottomModalOption'
import SubHeader from '@layouts/SubHeader'

// 소개글 글자제한
const MAX_LENGTH = 200

const ProfileEdit = () => {
  const [isUpload, setIsUpload] = useState(false)
  const [profileImg, setProfileImg] = useState<string | undefined>(undefined)
  const [userNickName, setUserNickName] = useState<string>('빌터')
  const [textareaValue, setTextareaValue] = useState('저는 빌터 인간 입니다')

  // 소개글 글자제한
  const validateDescription = (description: string) => {
    return description.length <= MAX_LENGTH
  }

  // 소개글 글자제한
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (validateDescription(value)) {
      setTextareaValue(value)
    }
  }

  const {
    selectedTeam,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  } = useTeamDialog()

  return (
    <>
      <SubHeader
        left='back'
        center='프로필 수정 페이지'
      />
      <form
        onSubmit={(e) => {
          onProfileEditSubmit(
            e,
            userNickName,
            textareaValue,
            selectedTeam,
            profileImg,
          )
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
              handleImageUpload(e, setProfileImg, setIsUpload)
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
          />
        </ProfileEditInputWrap>
        <ProfileEditInputWrap>
          <label htmlFor='edit_notice'>소개글</label>
          <textarea
            name=''
            id='edit_notice'
            value={textareaValue}
            onChange={(e) => {
              handleChange(e)
            }}
          ></textarea>
          <p>
            {textareaValue.length}/{MAX_LENGTH}
          </p>
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
      </form>
    </>
  )
}

export default ProfileEdit
