import { GoodsDetail } from '@typings/db'
import {
  Container,
  GoodsListCardContainer,
  BedgeContainer,
  GoodsInfoContainer,
  ContentWrapper,
} from './style'

import CardBedge from '@components/CardBedge'
import { formatPriceWithComma } from '@utils/formatPrice'

import Placeholder from '@components/Placeholder'
import { useNavigate } from 'react-router-dom'

interface GoodsListCardProps {
  goodsPost: Partial<GoodsDetail>
}

const GoodsListCard = ({ goodsPost }: GoodsListCardProps) => {
  if (!goodsPost) return null
  const { imageUrls, title, price, status, category, teamName, id } = goodsPost

  const navigate = useNavigate()

  return (
    <Container>
      <ContentWrapper onClick={() => navigate(`/goods-detail/${id}`)}>
        {imageUrls && imageUrls.length > 0 ? (
          <img
            src={imageUrls[0]}
            alt='상품 이미지'
          />
        ) : (
          <Placeholder />
        )}
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
              {formatPriceWithComma(price as number) === '0'
                ? '나눔'
                : `${formatPriceWithComma(price as number)}원`}
            </GoodsInfoContainer>
          </div>
        </GoodsListCardContainer>
      </ContentWrapper>
      {status === '거래완료' && <button>후기 보내기</button>}
    </Container>
  )
}

export default GoodsListCard
