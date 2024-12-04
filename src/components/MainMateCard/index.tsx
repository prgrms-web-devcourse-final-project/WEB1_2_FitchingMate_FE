import {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  BedgeContainer,
  Description,
  CardImageWrap,
  InListDescription,
} from './style'
import Placeholder from '@assets/default/placeholder.svg?react' // 기본 이미지 컴포넌트
import CardBedge from '@components/CardBedge'

import { formatMatchTime } from '@utils/formatDate'
import { MateCardData } from '@typings/db'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { useNavigate } from 'react-router-dom'

interface MateCardProps {
  card: MateCardData
  $isDetailPage?: boolean
}

const MainMateCard = ({ card, $isDetailPage }: MateCardProps) => {
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

  const navigate = useNavigate()

  const currentPath = ROUTE_PATH.MATE_DETAIL.replace(':id', postId.toString())

  return (
    <CardContainer
      onClick={() => navigate(currentPath)}
      $isDetailPage={$isDetailPage}
    >
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
          <CardBedge text={status} />
        </CardImageWrap>
      )}
      <CardContent $isDetailPage={$isDetailPage}>
        <CardContentLeft>
          <InListDescription>
            <p>{title}</p>
            <p>상대팀: {rivalTeamName}</p>
            <p>{formatMatchTime(matchTime)}</p>
            <p>
              {location} / {maxParticipants}명
            </p>
          </InListDescription>
          <BedgeContainer>
            <CardBedge text={myTeamName} />
            {age !== '상관없음' && <CardBedge text={age} />}
            {gender !== '상관없음' && <CardBedge text={gender} />}
            {transportType !== '상관없음' && <CardBedge text={transportType} />}
          </BedgeContainer>
        </CardContentLeft>
      </CardContent>
    </CardContainer>
  )
}

export default MainMateCard
