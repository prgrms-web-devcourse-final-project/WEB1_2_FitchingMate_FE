import {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  BedgeContainer,
  Description,
  CardImageWrap,
} from './style'
import Placeholder from '@assets/default/placeholder.svg?react'
import CardBedge from '@components/CardBedge'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { useNavigate } from 'react-router-dom'

const MateCard = () => {
  const navigate = useNavigate()

  return (
    // 경로는 추후 수정 필요

    <CardContainer onClick={() => navigate(ROUTE_PATH.MATE_DETAIL)}>
      {/* 여기 이미지 들어갈거임 없으면 플홀 */}
      <CardImageWrap>
        <Placeholder />
      </CardImageWrap>

      <CardContent>
        {/* 경기정보 */}
        <CardContentLeft>
          <Description>
            <p>피치메이트</p>
            <p>상대팀 : KT</p>
            <p>11월 08일 13시 - 문학</p>
          </Description>
          <BedgeContainer>
            <CardBedge />
            <CardBedge />
          </BedgeContainer>
        </CardContentLeft>

        {/* 모집정보 */}
        <CardContentRight>
          <CardBedge text='모집중' />
          <p>10명</p>
        </CardContentRight>
      </CardContent>
    </CardContainer>
  )
}

export default MateCard
