import { Link } from 'react-router-dom';
import {
  CardBedgeWrap,
  CardContainer,
  CardImage,
  CardImageWrap,
  CardPrice,
  CardTextWrap,
  CardTitle,
  PlaceholderWrap,
} from './style';
import CardBedge from '@components/CardBedge';
import Placeholder from '@assets/default/placeholder.svg?react';
import { GoodsPostSummary } from '@typings/db';
import { ROUTE_PATH } from '@constants/ROUTE_PATH';

interface GoodsCardProps {
  card: GoodsPostSummary;
}

const GoodsCard = ({ card }: GoodsCardProps) => {
  const { teamName, title, category, price, imageUrl } = card;

  const navigate = useNavigate()

  return (
    <Link
      to={`${ROUTE_PATH.GOODS_DETAIL}/${card.id}`}
      style={{ display: 'block', width: 'calc(50% - 10px)' }}
    >
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
