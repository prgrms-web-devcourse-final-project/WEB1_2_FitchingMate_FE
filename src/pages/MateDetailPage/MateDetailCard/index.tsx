import {
    CardContainer,
    CardContent,
    CardContentLeft,
    CardContentRight,
    BedgeContainer,
  Description,
} from './style'
import CardBedge from '@components/CardBedge'

const MateDetailCard = () => {
  return (
    <CardContainer>  
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

export default MateDetailCard