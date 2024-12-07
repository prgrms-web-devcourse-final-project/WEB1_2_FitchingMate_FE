import ProfileBedge from '@components/ProfileBedge'
import {
  ButtonContainer,
  ConfirmationContainer,
  UserInfo,
  UserListCardContainer,
} from './style'
import { useMateChatStore } from '@store/useMateChatStore'
import { MateChatMember } from '@typings/mateChat'

interface MateUserCardProps {
  member: MateChatMember
  handleAlertClick: () => void
}

const MateUserCard = ({ member, handleAlertClick }: MateUserCardProps) => {
  const {
    isOwner,
    recruitStatus,
    setCurrentAlertStatus,
    confirmedParticipants,
    setConfirmedParticipants,
  } = useMateChatStore()
  const { imageUrl, nickname, memberId } = member

  // 추후 API 연동 시 추가 예정

  // const handleExcludeClick = () => {
  //   setCurrentAlertStatus({ type: 'EXCLUDE_USER', userName: nickname })
  //   handleAlertClick()
  // }

  const handleConfirmation = () => {
    if (confirmedParticipants.includes(memberId)) {
      const filteredParticipants = confirmedParticipants.filter(
        (id) => id !== memberId,
      )
      setConfirmedParticipants(filteredParticipants)
    } else {
      setConfirmedParticipants([...confirmedParticipants, memberId])
    }
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
          <ConfirmationContainer>
            <input
              type='checkbox'
              id={`confirm-${memberId}`}
              name={`confirm-${memberId}`}
              checked={confirmedParticipants.includes(memberId)}
              onChange={handleConfirmation}
            />
            <label htmlFor={`confirm-${memberId}`}>참가확인</label>
          </ConfirmationContainer>
        )}
      </ButtonContainer>
    </UserListCardContainer>
  )
}

export default MateUserCard
