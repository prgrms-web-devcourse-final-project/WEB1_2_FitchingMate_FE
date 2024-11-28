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
  const formattingDate = (createdAt: string) => {
    const date = new Date(createdAt)

    const year = date.getFullYear()
    const month = ('0' + (date.getMonth() + 1)).slice(-2)
    const day = ('0' + date.getDate()).slice(-2)

    return `${year}-${month}-${day}`
  }

  return (
    <Link
      to={'/'}
      style={{ width: '100%', display: 'block' }}
    >
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
          <GoodsRecordPrice>{price.toLocaleString('ko-KR')}원</GoodsRecordPrice>
          <GoodsInfo>
            <span>{writer}</span>
            <span>{formattingDate(createdAt)}</span>
          </GoodsInfo>
        </GoodsRecordTextWrap>
      </GoodsRecordBoxWrap>
    </Link>
  )
}

export default GoodsRecordBox
