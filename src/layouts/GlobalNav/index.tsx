import { NavList, NavText, NavUl, NavWrap } from './style'

import HomeIcon from '@assets/icon/nav_home.svg?react'
import HomeIconFill from '@assets/icon/nav_home_fill.svg?react'
import FindIcon from '@assets/icon/nav_find.svg?react'
import FindIconFill from '@assets/icon/nav_find_fill.svg?react'
import TradeIcon from '@assets/icon/nav_trade.svg?react'
import TradeIconFill from '@assets/icon/nav_trade_fill.svg?react'
import ChatIcon from '@assets/icon/nav_chat.svg?react'
import ChatIconFill from '@assets/icon/nav_chat_fill.svg?react'
import UserIcon from '@assets/icon/nav_user.svg?react'
import UserIconFill from '@assets/icon/nav_user_fill.svg?react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTE_PATH } from '@utils/ROUTE_PATH'

const GlobalNav = () => {
  const { pathname } = useLocation()

  return (
    <NavWrap>
      <NavUl>
        <NavList>
          <Link to={ROUTE_PATH.HOME}>
            {pathname === ROUTE_PATH.HOME ? <HomeIconFill /> : <HomeIcon />}
            <NavText>홈</NavText>
          </Link>
        </NavList>

        <NavList>
          <Link to={ROUTE_PATH.MATE_LIST}>
            {pathname === ROUTE_PATH.MATE_LIST ? (
              <FindIconFill />
            ) : (
              <FindIcon />
            )}
            <NavText>메이트 찾기</NavText>
          </Link>
        </NavList>

        <NavList>
          <Link to={ROUTE_PATH.GOODS_LIST}>
            {pathname === ROUTE_PATH.GOODS_LIST ? (
              <TradeIconFill />
            ) : (
              <TradeIcon />
            )}
            <NavText>굿즈거래</NavText>
          </Link>
        </NavList>

        <NavList>
          <Link to={ROUTE_PATH.CHAT}>
            {pathname === ROUTE_PATH.CHAT ? <ChatIconFill /> : <ChatIcon />}
            <NavText>채팅</NavText>
          </Link>
        </NavList>

        <NavList>
          <Link to={ROUTE_PATH.PROFILE}>
            {pathname === ROUTE_PATH.PROFILE ? <UserIconFill /> : <UserIcon />}
            <NavText>마이</NavText>
          </Link>
        </NavList>
      </NavUl>
    </NavWrap>
  )
}

export default GlobalNav
