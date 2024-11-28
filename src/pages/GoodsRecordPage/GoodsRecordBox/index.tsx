import { Link } from 'react-router-dom'
import {
  GoodsImageWrap,
  GoodsInfo,
  GoodsRecordBoxWrap,
  GoodsRecordPrice,
  GoodsRecordTextWrap,
  GoodsRecordTitle,
} from '../style'

import Placeholder from '@assets/default/placeholder.svg?react'

interface GoodsBoxPropTypes {
  title: string
  image?: string
  price: number
  writer: string
  createdAt: string // 추후 수정
}

const GoodsRecordBox = ({
  title,
  image,
  price,
  writer,
  createdAt,
}: GoodsBoxPropTypes) => {
  return (
    <Link to={'/'}>
      <GoodsRecordBoxWrap>
        <GoodsImageWrap>
          {image ? (
            <img
              src={image}
              alt={title}
            />
          ) : (
            <Placeholder />
          )}
        </GoodsImageWrap>
        <GoodsRecordTextWrap>
          <GoodsRecordTitle>{title}</GoodsRecordTitle>
          <GoodsRecordPrice>{price}원</GoodsRecordPrice>
          <GoodsInfo>
            <span>{writer}</span>
            <span>{createdAt}</span>
          </GoodsInfo>
        </GoodsRecordTextWrap>
      </GoodsRecordBoxWrap>
    </Link>
  )
}

export default GoodsRecordBox
