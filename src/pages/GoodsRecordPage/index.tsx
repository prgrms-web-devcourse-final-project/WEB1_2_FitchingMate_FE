import SubHeader from '@layouts/SubHeader'
import GoodsRecordBox from './GoodsRecordBox'
import { GoodsSection, NoGoodsList } from './style'
import { GoodsRecordDataList } from './mockData'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import userService from '@apis/userService'

const HEADER_TEXT = {
  sold: '굿즈 판매기록',
  bought: '굿즈 구매기록',
}

const GoodsRecordPage = () => {
  const location = useLocation()
  const [memberId, setMemberId] = useState(1)
  const [pageType, setPageType] = useState<('sold' | 'bought') | null>(
    location.state.type,
  )
  const [goodsRecordDataList, setGoodsRecordDataList] =
    useState(GoodsRecordDataList)

  const { data, isPending, isError, error } = useQuery({
    queryKey: [QUERY_KEY, pageType],
    queryFn: () =>
      pageType && userService.getGoodsRecordList(memberId, pageType),
  })

  console.log(data)

  useEffect(() => {
    if (pageType === null) {
      alert('어케들어왔누')
    }
  }, [])

  return (
    <>
      <SubHeader
        left='back'
        center={typeof pageType === 'string' ? HEADER_TEXT[pageType] : '페이지'}
      />
      <GoodsSection>
        {goodsRecordDataList.length === 0 ? (
          <NoGoodsList>기록이 없습니다</NoGoodsList>
        ) : (
          goodsRecordDataList.map((data, index) => {
            return (
              <GoodsRecordBox
                key={index}
                title={data.title}
                price={data.price}
                author={data.writer}
                imageUrl={data.imgSrc}
                createdAt={data.createdAt}
              />
            )
          })
        )}
      </GoodsSection>
    </>
  )
}

export default GoodsRecordPage
