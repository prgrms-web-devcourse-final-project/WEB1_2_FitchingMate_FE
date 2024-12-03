import {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  BedgeContainer,
  Description,
  CardImageWrap,
} from './style'
import Placeholder from '@assets/default/placeholder.svg?react' // 기본 이미지 컴포넌트
import CardBedge from '@components/CardBedge'
import { kboTeamInfo } from '@constants/kboInfo'
import { formatMatchTime } from '@utils/formatDate'
import { MateCardData } from '@typings/db'

interface MateCardProps {
  card: MateCardData
  $isDetailPage?: boolean
}

const MateCard = ({ card, $isDetailPage }: MateCardProps) => {
  const {
    myTeamName,
    rivalTeamName,
    matchTime,
    location,
    maxParticipants,
    status,
    age,
    gender,
    transportType,
    title,
    postId,
    imageUrl,
  } = card

  const teamInfo = kboTeamInfo[myTeamName]

  return (
    <CardContainer>
      {!$isDetailPage && (
        <CardImageWrap>
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={`${myTeamName} 이미지`}
            />
          ) : (
            <Placeholder
              width={100}
              height={100}
            />
          )}
        </CardImageWrap>
      )}
      <CardContent>
        <CardContentLeft>
          <Description>
            <p>{title}</p>
            <p>상대팀: {rivalTeamName}</p>
            <p>{formatMatchTime(matchTime)}</p>
            <p>{location}</p>
          </Description>
          <BedgeContainer>
            <CardBedge text={myTeamName} />
            {age !== '상관없음' && <CardBedge text={age} />}
            {gender !== '상관없음' && <CardBedge text={gender} />}
            {transportType !== '상관없음' && <CardBedge text={transportType} />}
          </BedgeContainer>
        </CardContentLeft>

        <CardContentRight>
          <CardBedge text={status} />
          <p>{maxParticipants}명</p>
        </CardContentRight>
      </CardContent>
    </CardContainer>
  )
}

export default MateCard
