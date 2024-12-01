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
import { kboTeamInfo } from '@constants/kboInfo';

interface GoodsCardProps {
  card: {
    id: number;
    teamName: string;
    title: string;
    category: string;
    price: number;
    imageUrl: string;
  };
}

const GoodsCard = ({ card }: GoodsCardProps) => {
  const { teamName, title, category, price, imageUrl } = card;
  const teamInfo = kboTeamInfo[teamName];

  return (
    <Link
      to={`/goods/${card.id}`}
      style={{
        display: 'block',
        width: 'calc(50% - 10px)',
      }}
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
            {/* 팀 이름 뱃지 */}
            <CardBedge
              text={teamName}
              style={{ backgroundColor: teamInfo?.color || '#ccc' }}
            />
            {/* 카테고리 뱃지 */}
            <CardBedge text={category} />
          </CardBedgeWrap>
          <CardPrice>{price.toLocaleString('ko-KR')}원</CardPrice>
        </CardTextWrap>
      </CardContainer>
    </Link>
  );
};

export default GoodsCard;
