import { Link } from 'react-router-dom'
import {
  GoodsImageWrap,
  GoodsInfo,
  GoodsRecordBoxContainer,
  GoodsRecordBoxWrap,
  GoodsRecordPrice,
  GoodsRecordTextWrap,
  GoodsRecordTitle,
} from '../style'

import Placeholder from '@assets/default/placeholder.svg?react'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import dayjs from 'dayjs'

interface GoodsBoxPropTypes {
  postId: number
  title: string
  imageUrl: string
  price: number
  author: string
  createdAt: string
}

const GoodsRecordBox = ({
  postId,
  title,
  imageUrl,
  price,
  author,
  createdAt,
}: GoodsBoxPropTypes) => {
  const time = dayjs(createdAt)

  return (
    <GoodsRecordBoxContainer>
      <Link to={`/goods-detail/${postId}`}>
        <GoodsRecordBoxWrap>
          <GoodsImageWrap>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
              />
            ) : (
              <Placeholder />
            )}
          </GoodsImageWrap>
          <GoodsRecordTextWrap>
            <GoodsRecordTitle>{title}</GoodsRecordTitle>
            <GoodsRecordPrice>
              {price.toLocaleString('ko-KR')}원
            </GoodsRecordPrice>
            <GoodsInfo>
              <span>{author}</span>
              <span>{time.format('YYYY-MM-DD')}</span>
            </GoodsInfo>
          </GoodsRecordTextWrap>
        </GoodsRecordBoxWrap>
      </Link>
    </GoodsRecordBoxContainer>
  )
}

export default GoodsRecordBox
