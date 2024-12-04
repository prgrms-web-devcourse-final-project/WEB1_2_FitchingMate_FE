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
import { GoodsPostSummary } from '@typings/db'
import { formatPriceWithComma } from '@utils/formatPrice'

interface GoodsCardProps {
  card: GoodsPostSummary
}

const GoodsCard = ({ card }: GoodsCardProps) => {
  const { id, teamName, title, category, price, imageUrl } = card

  const currentPath = `/goods-detail/${id}`

  return (
    <Link to={currentPath}>
      <CardContainer>
        <CardImageWrap>
          {imageUrl ? (
            <CardImage
              src={imageUrl}
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
            <CardBedge text={teamName} />
            <CardBedge text={category} />
          </CardBedgeWrap>
          <CardPrice>
            {formatPriceWithComma(price) === '0'
              ? '나눔'
              : `${formatPriceWithComma(price)}원`}
          </CardPrice>
        </CardTextWrap>
      </CardContainer>
    </Link>
  )
}

export default GoodsCard
