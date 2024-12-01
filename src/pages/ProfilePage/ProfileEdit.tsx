import Form from '@components/Form'
import {
  ProfileEditInputWrap,
  ProfileImageEdit,
  ProfileImageEditWrap,
} from './style'

import Camera from '@assets/icon/camera.svg?react'
import Select from '@assets/icon/down.svg?react'
import { useState } from 'react'
import SubHeader from '@layouts/SubHeader'

const ProfileEdit = () => {
  const [textareaValue, setTextareaValue] = useState('')

  return (
    <>
      <SubHeader
        left='exit'
        center='프로필 수정 페이지'
      />
      <form>
        <ProfileImageEditWrap>
          <ProfileImageEdit htmlFor='edit_img'>
            <img
              src='https://entertainimg.kbsmedia.co.kr/cms/uploads/PERSON_20240206075441_1b54f931528a9d36c98db236a5e19d74.jpg'
              alt=''
            />
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
          />
        </ProfileImageEditWrap>
        <Form fieldList={[{ name: '닉네임', placeholder: '빌터' }]}></Form>
        <ProfileEditInputWrap>
          <label htmlFor='edit_notice'>소개글</label>
          <textarea
            name=''
            id='edit_notice'
            onChange={(e) => {
              setTextareaValue(e.target.value)
            }}
          ></textarea>
        </ProfileEditInputWrap>

        <ProfileEditInputWrap>
          <label>마이 팀</label>
          <div>
            <span>삼성 라이온즈</span>
            <Select />
          </div>
        </ProfileEditInputWrap>
      </form>
    </>
  )
}

export default ProfileEdit
