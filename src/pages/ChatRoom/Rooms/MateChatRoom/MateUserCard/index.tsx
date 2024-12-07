import ProfileBedge from '@components/ProfileBedge'
import {
  ButtonContainer,
  ExcludeButton,
  UserInfo,
  UserListCardContainer,
} from './style'
import PillButton from '@components/PillButton'
import { useMateChatStore } from '@store/useMateChatStore'
import { MateChatMember } from '@typings/mateChat'

interface MateUserCardProps {
  member: MateChatMember
  handleAlertClick: () => void
}

const MateUserCard = ({ member, handleAlertClick }: MateUserCardProps) => {
  const { isOwner, recruitStatus, setCurrentAlertStatus } = useMateChatStore()
  const { imageUrl, nickname, memberId } = member

  const handleExcludeClick = () => {
    setCurrentAlertStatus({ type: 'EXCLUDE_USER', userName: nickname })
    handleAlertClick()
  }

  const isCompleteRecruit = isOwner && recruitStatus === '직관완료'

  return (
    <UserListCardContainer>
      <UserInfo>
        <ProfileBedge
          height={3}
          width={3}
          imageSrc={imageUrl}
          isChat
        />
        <p>
          {nickname} {isOwner && <span>(모임장)</span>}
        </p>
      </UserInfo>
      <ButtonContainer>
        {isCompleteRecruit && (
          <PillButton
            text='참가확인'
            onClick={() => {}}
            $isSelected={true}
            disabled={false}
          />
        )}
        {isOwner && (
          <ExcludeButton onClick={handleExcludeClick}>X</ExcludeButton>
        )}
      </ButtonContainer>
    </UserListCardContainer>
  )
}

export default MateUserCard
