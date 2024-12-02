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

interface GoodsCardProps {
  card: GoodsPostSummary;
}

const GoodsCard = ({ card }: GoodsCardProps) => {
  const { teamName, title, category, price, imageUrl } = card;

  return (
    <Link to={`/goods/${card.id}`} style={{ display: 'block', width: 'calc(50% - 10px)' }}>
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
          <CardPrice>{price.toLocaleString()}원</CardPrice>
        </CardTextWrap>
      </CardContainer>
    </Link>
  );
};

export default GoodsCard;
