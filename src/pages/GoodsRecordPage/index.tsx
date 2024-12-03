import SubHeader from '@layouts/SubHeader'
import GoodsRecordBox from './GoodsRecordBox'
import { GoodsSection } from './style'
import { GoodsRecordDataList } from './mockData'
import { useState } from 'react'

const GoodsRecordPage = () => {
  const [goodsRecordDataList, setGoodsRecordDataList] =
    useState(GoodsRecordDataList)

  return (
    <>
      <SubHeader
        left='back'
        center='굿즈 판매기록'
      />
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
    </>
  )
}

export default GoodsRecordPage
