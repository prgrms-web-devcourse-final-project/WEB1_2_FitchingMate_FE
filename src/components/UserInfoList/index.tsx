import BatIcon from '@assets/icon/baseball.svg?react'

import { DescriptionContainer, ProfileContainer, ProfileManner } from './style'
import ProfileBedge from '@components/ProfileBedge'
import { GoodsDetail } from '@typings/db'
import { formatManner } from '@utils/formatManner'
import { Link } from 'react-router-dom'

interface MateHost {
  manner: number
  nickname: string
  imageUrl: string
  authorId?: number
  memberId?: number
}
interface UserInfoListProps {
  seller: MateHost | GoodsDetail['seller']
}

const UserInfoList = ({ seller }: UserInfoListProps) => {
  const { nickname, manner, imageUrl, authorId, memberId } = seller

  const userId = memberId || authorId

  return (
    <Link to={`/profile/${userId}`}>
      <DescriptionContainer>
        <ProfileContainer>
          <ProfileBedge
            width={1.875}
            height={1.875}
            isChat={true}
            imageSrc={imageUrl}
          />
          <p>{nickname}</p>
        </ProfileContainer>
        <p>
          <ProfileManner>{formatManner(manner)}</ProfileManner>
          <BatIcon />
        </p>
      </DescriptionContainer>
    </Link>
  )
}

export default UserInfoList
