import { GoodsDetail } from '@typings/db'
import {
  Container,
  GoodsListCardContainer,
  BedgeContainer,
  GoodsInfoContainer,
} from './style'

import CardBedge from '@components/CardBedge'
import { formatPriceWithComma } from '@utils/formatPrice'

interface GoodsListCardProps {
  goodsPost: GoodsDetail
}

const GoodsListCard = ({ goodsPost }: GoodsListCardProps) => {
  const { imageUrls, title, price, status, category, teamName } = goodsPost

  return (
    <Container>
      <div>
        <img
          src={imageUrls[0]}
          alt='상품 이미지'
        />
        <GoodsListCardContainer>
          <div>
            <BedgeContainer>
              <div>
                <CardBedge text={category} />
                <CardBedge text={teamName} />
              </div>
              <CardBedge text={status} />
            </BedgeContainer>
            <GoodsInfoContainer>
              <p>{title}</p>
              <p>{formatPriceWithComma(price)}원</p>
            </GoodsInfoContainer>
          </div>
        </GoodsListCardContainer>
      </div>
      {status === '거래중' && <button>후기 보내기</button>}
    </Container>
  )
}

export default GoodsListCard
