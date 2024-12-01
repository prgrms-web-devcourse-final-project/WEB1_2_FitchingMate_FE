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
import { useState } from 'react'
import CardBedge from '@components/CardBedge'
import Placeholder from '@assets/default/placeholder.svg?react'

interface GoodsCardPropsType {
  imgSrc?: string
  title: string
  teamName: string
  category: string
  price: number
}

const GoodsCard = ({
  imgSrc,
  title,
  teamName,
  category,
  price,
}: GoodsCardPropsType) => {
  const hasImg = imgSrc ? true : false

  return (
    <Link to='/'>
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
