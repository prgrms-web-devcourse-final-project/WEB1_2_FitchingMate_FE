import ProfileBedge from '@components/ProfileBedge'
import { FollowBoxLeft, FollowBoxRight, FollowBoxWrap } from '../style'
import { Link } from 'react-router-dom'

import Message from '@assets/icon/chat.svg?react'
import UserAdd from '@assets/icon/user_add.svg?react'
import UserAdded from '@assets/icon/user_added.svg?react'
import { useState } from 'react'

interface FollowInfo {
  data: {
    memberId: number
    nickname: string
    imageUrl: string
  }
}

const FollowBox = ({ data }: FollowInfo) => {
  const [isFollowed, setIsFollowed] = useState(true)

  return (
    <FollowBoxWrap>
      <FollowBoxLeft>
        <Link to={`/profile/${data.memberId}`}>
          <ProfileBedge
            width={3.125}
            height={3.125}
            imageSrc={data.imageUrl}
          />
          <p>{data.nickname}</p>
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
