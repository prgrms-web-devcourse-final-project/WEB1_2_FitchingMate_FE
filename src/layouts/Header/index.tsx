import { Link } from 'react-router-dom'
import { HeaderBox, LogoWrap } from './style'
import Logo from '@assets/logo/logo_navy.svg?react'
// import Alarm from '@components/Alarm'
const Header = () => {
  return (
    <HeaderBox>
      <LogoWrap>
        <Link to='/'>
          <Logo />
        </Link>
      </LogoWrap>
      {/* <Alarm /> */}
    </HeaderBox>
  )
}

export default Header
