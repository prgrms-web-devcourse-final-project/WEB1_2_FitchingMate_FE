import { useState } from 'react'
import GoodsRecordBox from './GoodsRecordBox'
import { GoodsSection } from './style'
import { GoodsRecordDataList } from './mockData'

const GoodsRecordPage = () => {
  const [goodsRecordDataList, setGoodsRecordDataList] =
    useState(GoodsRecordDataList)

  return (
    <GoodsSection>
      {goodsRecordDataList.map((data, index) => {
        return (
          <GoodsRecordBox
            key={index}
            title={data.title}
            price={data.price}
            writer={data.writer}
            image={data.imgSrc}
            createdAt={data.createdAt}
          />
        )
      })}
    </GoodsSection>
  )
}

export default GoodsRecordPage
