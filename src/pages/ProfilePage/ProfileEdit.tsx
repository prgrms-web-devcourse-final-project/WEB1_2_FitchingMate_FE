import {
  ProfileEditInputWrap,
  ProfileImageEdit,
  ProfileImageEditWrap,
} from './style'
import { FormEvent, useState } from 'react'
import { handleImageUpload } from './methods'

import Camera from '@assets/icon/camera.svg?react'
import Select from '@assets/icon/down.svg?react'
import BottomModal from '@components/BottomModal'
import useTeamDialog from '@hooks/useTeamDialog'
import BottomModalOption from './BottomModalOption'
import SubHeader from '@layouts/SubHeader'
import useGetMyInfo from '@hooks/useGetMyInfo'
import useEditMyInfo from '@hooks/useEditMyInfo'

// 소개글 글자제한
const MAX_LENGTH = 200

const ProfileEdit = () => {
  const [isUpload, setIsUpload] = useState(false)
  const [profileImg, setProfileImg] = useState<File | undefined>(undefined)
  const [profileImgSrc, setProfileImgSrc] = useState<string | undefined>(
    undefined,
  )
  const [userNickName, setUserNickName] = useState<string>('빌터')
  const [textareaValue, setTextareaValue] = useState('저는 빌터 인간 입니다')

  const { mutateMyInfo, error, isError, isPending } = useEditMyInfo()

  // 프로파일 수정 사항 서브밋
  const onProfileEditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(selectedTeamId)
    const dataObject = {
      // 팀아이디 수정요청
      teamId: selectedTeamId,
      nickname: userNickName,
      aboutMe: textareaValue,
      // 멤버아이디 수정요청
      memberId: 2,
    }
    const formData = new FormData()

    formData.append(
      'data',
      new Blob([JSON.stringify(dataObject)], { type: 'application/json' }),
    )
    profileImg && formData.append('image', profileImg)

    mutateMyInfo(formData)
  }

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
    selectedTeamId,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  } = useTeamDialog()

  return (
    <>
      {/* 폼 (내용) */}
      <form onSubmit={onProfileEditSubmit}>
        {/* 서브헤더 */}
        <SubHeader
          left='back'
          center='프로필 수정 페이지'
          right='complete'
        />
        <ProfileImageEditWrap>
          <ProfileImageEdit htmlFor='edit_img'>
            {!isUpload ? (
              <img
                src='https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20240206075441_1b54f931528a9d36c98db236a5e19d74.jpg'
                alt=''
              />
            ) : (
              <img
                src={profileImgSrc}
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
              handleImageUpload(e, setProfileImg, setProfileImgSrc, setIsUpload)
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
          <BottomModalOption onSelectTeam={handleTeamSelect} />
        </BottomModal>
      </form>
    </>
  )
}

export default ProfileEdit
