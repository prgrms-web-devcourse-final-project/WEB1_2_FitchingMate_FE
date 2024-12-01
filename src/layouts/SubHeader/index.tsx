import { Link, useNavigate } from 'react-router-dom'
import {
  SubHeaderBox,
  SubHeaderComplete,
  SubHeaderLeft,
  SubHeaderMessageText,
  SubHeaderRight,
  SubHeaderText,
} from './style'

import Back from '@assets/icon/back.svg?react'
import Exit from '@assets/icon/delete_thin.svg?react'
import Logout from '@assets/icon/exit_line.svg?react'
import Alarm from '@components/Alarm'

interface SubHeaderPropsType {
  left?: 'back' | 'exit' | 'message'
  center?: string
  right?: 'complete' | 'logout' | 'alarm'
}

const SubHeader = ({ left, center, right }: SubHeaderPropsType) => {
  const navigate = useNavigate()

  const subHeaderLeftContent = {
    back: <Back onClick={() => navigate(-1)} />,
    exit: <Exit />,
    message: <SubHeaderMessageText>메시지</SubHeaderMessageText>,
  }

  const subHeaderRightContent = {
    complete: <SubHeaderComplete>완료</SubHeaderComplete>,
    logout: <Logout />,
    alarm: <Alarm />,
  }

  return (
    <SubHeaderBox>
      <SubHeaderLeft>{left && subHeaderLeftContent[left]}</SubHeaderLeft>
      <SubHeaderText>{center}</SubHeaderText>
      <SubHeaderRight>{right && subHeaderRightContent[right]}</SubHeaderRight>
    </SubHeaderBox>
  )
}

export default SubHeader
