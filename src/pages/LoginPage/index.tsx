import CharacterBest from '@assets/character/character-best.svg?react'
import Logo from '@assets/logo/logo_navy.svg?react'
import NaverLoginButton from './NaverLoginButton'
import { LoginPageContainer, TopContent, ButtonContainer } from './style'

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <TopContent>
        <CharacterBest className='character-best' />
        <Logo className='logo' />
      </TopContent>

      <ButtonContainer>
        <NaverLoginButton />
      </ButtonContainer>
    </LoginPageContainer>
  )
}

export default LoginPage

/*
import { useEffect } from 'react'
import CharacterBest from '@assets/character/character-best.svg?react'
import Logo from '@assets/logo/logo_navy.svg?react'
import NaverLoginButton from './NaverLoginButton'
import { LoginPageContainer, TopContent, ButtonContainer } from './style'

const LoginPage = () => {
  useEffect(() => {
    // 메시지 수신 이벤트 핸들러
    const handleMessage = (event: MessageEvent) => {
      // 안전한 도메인에서 온 메시지만 처리
      if (event.origin !== import.meta.env.VITE_API_ENDPOINT) {
        console.warn('허용되지 않은 도메인에서 온 메시지입니다.', event.origin)
        return
      }

      if (event.data === 'NAVER_LOGIN_SUCCESS') {
        alert('네이버 로그인 성공!')
        // 로그인 성공 시 추가 작업: 상태 업데이트 또는 리다이렉트
        // 예: navigate('/dashboard') 등
      }
    }

    // 메시지 이벤트 리스너 등록
    window.addEventListener('message', handleMessage)

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <LoginPageContainer>
      <TopContent>
        <CharacterBest className="character-best" />
        <Logo className="logo" />
      </TopContent>

      <ButtonContainer>
        <NaverLoginButton />
      </ButtonContainer>
    </LoginPageContainer>
  )
}

export default LoginPage

*/