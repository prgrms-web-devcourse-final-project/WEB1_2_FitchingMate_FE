import ProfileBedge from '@components/ProfileBedge'
import { UserInfo, UserListCardContainer } from './style'
import { useGoodsChatStore } from '@store/useGoodsChatStore'
import { Link } from 'react-router-dom'

interface GoodsUserCardProps {
  user: {
    memberId: number
    nickname: string
    imageUrl?: string
  }
}

const GoodsUserCard = ({ user }: GoodsUserCardProps) => {
  const { memberId, nickname, imageUrl } = user
  const { currentSellerId } = useGoodsChatStore()

  const isSeller = memberId === currentSellerId

  return (
    <Link to={`/profile/${memberId}`}>
      <UserListCardContainer>
        <UserInfo>
          <ProfileBedge
            height={3}
            width={3}
            imageSrc={imageUrl}
            isChat={true}
          />
          <p>
            {nickname}
            {isSeller && <span>(판매자)</span>}
          </p>
        </UserInfo>
      </UserListCardContainer>
    </Link>
  )
}

export default GoodsUserCard
