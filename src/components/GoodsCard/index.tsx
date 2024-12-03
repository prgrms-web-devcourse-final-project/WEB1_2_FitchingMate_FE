import { Link } from 'react-router-dom'
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

interface GoodsCardPropsType {
  imgSrc?: string
  title: string
  teamName: string
  category: string
  price: number
  id: number
}

const GoodsCard = ({
  imgSrc = '',
  title = '',
  teamName = '',
  category = '',
  price = 0,
  id = 0,
}: GoodsCardPropsType) => {
  const hasImg = imgSrc ? true : false

  const currentPath = `/goods-detail/${id}`

  return (
    <Link to={currentPath}>
      <CardContainer>
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
