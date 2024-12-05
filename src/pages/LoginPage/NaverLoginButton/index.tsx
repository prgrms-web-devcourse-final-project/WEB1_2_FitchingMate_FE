import React from 'react'
import { StyledButton } from './style'
import NaverButton from '@assets/icon/naver_login.png'

// UUID 생성 함수: CSRF 방지를 위한 고유 state 값 생성
const generateUUID = (): string => {
  return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (c: any) =>
      (
        parseInt(c, 10) ^
        (crypto.getRandomValues(new Uint8Array(1))[0] &
          (15 >> (parseInt(c, 10) / 4)))
      ).toString(16),
  )
}

const NaverLoginButton = () => {
  const STATE = generateUUID()

  // 네이버 로그인 인증 URL 생성
  const NAVER_AUTH_URL = `${import.meta.env.VITE_API_ENDPOINT}/auth/connect/naver?state=${STATE}`

  const handleClick = () => {
    // 네이버 인증 URL로 리다이렉트
    window.location.href = NAVER_AUTH_URL
  }

  return (
    <StyledButton onClick={handleClick} type='button'>
      <img
        src={NaverButton}
        alt='네이버 로그인'
      />
    </StyledButton>
  )
}

export default NaverLoginButton
