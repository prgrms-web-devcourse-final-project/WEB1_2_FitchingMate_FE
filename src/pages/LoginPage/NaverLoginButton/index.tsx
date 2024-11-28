import { StyledButton } from './style'
import NaverButton from '@assets/icon/naver_login.png'

// UUID 생성 함수: CSRF 방지를 위한 고유 state 값 생성
const generateUUID = (): string => {
  return ([1e7] as any + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: string) =>
    (
      parseInt(c, 10) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (parseInt(c, 10) / 4)))
    ).toString(16)
  )
}

const NaverLoginButton = () => {
  // 환경 변수 가져오기
  const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID
  const REDIRECT_URI = encodeURIComponent(import.meta.env.VITE_REDIRECT_URI as string)
  const STATE = generateUUID()

  // 네이버 로그인 인증 URL 생성
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`

  // 로그인 버튼 클릭 핸들러
  const handleLoginClick = () => {
    window.location.href = NAVER_AUTH_URL
  }

  return (
    <StyledButton onClick={handleLoginClick}>
      <img src={NaverButton} alt="네이버 로그인" />
    </StyledButton>
  )
}

export default NaverLoginButton
