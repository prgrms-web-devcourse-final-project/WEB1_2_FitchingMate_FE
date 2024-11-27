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
