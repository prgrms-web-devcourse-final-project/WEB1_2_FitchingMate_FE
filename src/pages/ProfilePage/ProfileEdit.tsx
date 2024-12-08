import {
  ProfileEditInputWrap,
  ProfileImageEdit,
  ProfileImageEditWrap,
  ProfileSpinnerWrap,
} from './style'
import { FormEvent, useEffect, useState } from 'react'
import { handleImageUpload } from './methods'

import Camera from '@assets/icon/camera.svg?react'
import Select from '@assets/icon/down.svg?react'
import BottomModal from '@components/BottomModal'
import useTeamDialog from '@hooks/useTeamDialog'
import BottomModalOption from './BottomModalOption'
import SubHeader from '@layouts/SubHeader'
import useEditMyInfo from '@hooks/useEditMyInfo'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserInfo } from '@typings/userForm'
import { kboTeamInfo } from '@constants/kboInfo'
import { toast } from 'react-toastify'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import Spinner from '@components/Spinner'
import { useUserStore } from '@store/useUserStore'

// 소개글 글자제한
const MAX_LENGTH = 500

const ProfileEdit = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const memberId = localStorage.getItem('memberId')

  const [isUpload, setIsUpload] = useState(false)
  const [currentTeamId, setCurrentTeamId] = useState<number | null>(null)
  const [profileImg, setProfileImg] = useState<File | undefined>(undefined)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [profileImgSrc, setProfileImgSrc] = useState<string | undefined>(
    undefined,
  )

  const { mutateMyInfo, error, isError, isPending, isSuccess } = useEditMyInfo(
    Number(memberId),
  )

  // 프로파일 수정 사항 서브밋
  const onProfileEditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const dataObject = {
      // 팀아이디 수정요청
      teamId: selectedTeamId ? selectedTeamId : currentTeamId,
      nickname: userInfo?.nickname,
      aboutMe: userInfo?.aboutMe,
      // 멤버아이디 수정요청
      memberId: memberId,
    }
    const formData = new FormData()

    formData.append(
      'data',
      new Blob([JSON.stringify(dataObject)], { type: 'application/json' }),
    )
    profileImg && formData.append('file', profileImg)

    try {
      mutateMyInfo(formData)
      navigate(`${ROUTE_PATH.PROFILE}/${memberId}`)
    } catch (err) {
      toast('이런! 오류가 발생했어요.')
    }
  }

  // 소개글 글자제한
  const validateDescription = (description: string) => {
    return description.length <= MAX_LENGTH
  }

  // 소개글 글자제한
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (validateDescription(value)) {
      setUserInfo((prev) => {
        if (prev === null) return null
        return {
          ...prev,
          aboutMe: value,
        }
      })
    }
  }

  const {
    selectedTeam,
    selectedTeamId,
    bottomModalRef,
    handleClickSelectButton,
    handleTeamSelect,
  } = useTeamDialog()

  useEffect(() => {
    setUserInfo(location.state)
  }, [location.state])

  useEffect(() => {
    setCurrentTeamId(() => {
      return userInfo && kboTeamInfo[userInfo.teamName].id
    })
  }, [userInfo])

  return (
    <>
      {/* 폼 (내용) */}
      <form onSubmit={onProfileEditSubmit}>
        {isPending ? (
          <ProfileSpinnerWrap>
            <Spinner />
          </ProfileSpinnerWrap>
        ) : null}
        {/* 서브헤더 */}
        <SubHeader
          left='exit'
          center='프로필 수정 페이지'
          right='complete'
        />
        <ProfileImageEditWrap>
          <ProfileImageEdit htmlFor='edit_img'>
            {!isUpload ? (
              <img
                src={userInfo?.imageUrl}
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
            value={userInfo?.nickname}
            onChange={(e) => {
              setUserInfo((prev) => {
                if (prev === null) return null

                return {
                  ...prev,
                  nickname: e.target.value,
                }
              })
            }}
          />
        </ProfileEditInputWrap>
        <ProfileEditInputWrap>
          <label htmlFor='edit_notice'>소개글</label>
          <textarea
            name=''
            id='edit_notice'
            value={userInfo?.aboutMe}
            onChange={(e) => {
              handleChange(e)
            }}
          ></textarea>
          <p>
            {userInfo?.aboutMe ? userInfo?.aboutMe.length : '0'}/{MAX_LENGTH}
          </p>
        </ProfileEditInputWrap>

        <ProfileEditInputWrap>
          <label>마이 팀</label>
          <div onClick={handleClickSelectButton}>
            <span>{selectedTeam ? selectedTeam : userInfo?.teamName}</span>
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
