import ProfileBedge from '@components/ProfileBedge'
import { FollowBoxLeft, FollowBoxRight, FollowBoxWrap } from '../style'
import { Link } from 'react-router-dom'

import Message from '@assets/icon/chat.svg?react'
import UserAdd from '@assets/icon/user_add.svg?react'
import UserAdded from '@assets/icon/user_added.svg?react'
import { useState } from 'react'

const FollowBox = () => {
  const [isFollowed, setIsFollowed] = useState(true)

  return (
    <FollowBoxWrap>
      <FollowBoxLeft>
        <Link to={'/'}>
          <ProfileBedge
            width={3.125}
            height={3.125}
          />
          <p>빌터</p>
        </Link>
      </FollowBoxLeft>
      <FollowBoxRight>
        <Link to={'/'}>
          <Message />
        </Link>
        {isFollowed ? (
          <Link to={'/'}>
            <UserAdded />
          </Link>
        ) : (
          <Link to={'/'}>
            <UserAdd />
          </Link>
        )}
      </FollowBoxRight>
    </FollowBoxWrap>
  )
}

export default FollowBox
