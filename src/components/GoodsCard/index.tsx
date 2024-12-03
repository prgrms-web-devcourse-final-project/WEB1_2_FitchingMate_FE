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

interface GoodsCardProps {
  card: GoodsPostSummary;
}

const GoodsCard = ({ card }: GoodsCardProps) => {
  const { teamName, title, category, price, imageUrl } = card;
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
          {imageUrl ? (
            <CardImage src={imageUrl} alt={title} loading="lazy" />
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
          <CardPrice>{price}원</CardPrice>
        </CardTextWrap>
      </CardContainer>
    </Link>
  );
};

export default GoodsCard;
