import { Link, useNavigate } from 'react-router-dom'
import {
  CardBedgeWrap,
  CardContainer,
  CardImage,
  CardImageWrap,
  CardPrice,
  CardTextWrap,
  CardTitle,
  PlaceholderWrap,
} from './style'
import CardBedge from '@components/CardBedge'
import Placeholder from '@assets/default/placeholder.svg?react'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

interface GoodsCardPropsType {
  imgSrc?: string
  title: string
  teamName: string
  category: string
  price: number
}

const GoodsCard = ({
  imgSrc = '',
  title = '',
  teamName = '',
  category = '',
  price = 0,
}: GoodsCardPropsType) => {
  const hasImg = imgSrc ? true : false

  const navigate = useNavigate()

  return (
    // 경로는 추후 수정 필요
    <Link to={ROUTE_PATH.GOODS_DETAIL}>
      <CardContainer onClick={() => navigate(ROUTE_PATH.GOODS_DETAIL)}>
        <CardImageWrap>
          {hasImg ? (
            <CardImage
              src={imgSrc}
              alt={title}
              loading='lazy'
            />
          ) : (
            <PlaceholderWrap>
              <Placeholder />
            </PlaceholderWrap>
          )}
        </CardImageWrap>
        <CardTextWrap>
          <CardTitle>{title}</CardTitle>
          <CardBedgeWrap>
            {/* 팀 */}
            <CardBedge text={teamName} />

            {/* 카테고리 */}
            <CardBedge text={category} />
          </CardBedgeWrap>
          <CardPrice>{price.toLocaleString('ko-KR')}원</CardPrice>
        </CardTextWrap>
      </CardContainer>
    </Link>
  )
}

export default GoodsCard
