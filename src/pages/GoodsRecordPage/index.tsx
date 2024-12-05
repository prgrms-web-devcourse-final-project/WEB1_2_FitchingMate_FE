import SubHeader from '@layouts/SubHeader'
import GoodsRecordBox from './GoodsRecordBox'
import { GoodsSection, NoGoodsList } from './style'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import userService from '@apis/userService'
import { useInView } from 'react-intersection-observer'

const HEADER_TEXT = {
  sold: '굿즈 판매기록',
  bought: '굿즈 구매기록',
}

interface GoodsRecord {
  author: string
  createdAt: string
  imageUrl: string
  postId: number
  price: number
  title: string
}

const GoodsRecordPage = () => {
  const location = useLocation()
  const [memberId, setMemberId] = useState(1)
  const [pageType, setPageType] = useState<('sold' | 'bought') | null>(
    location.state.type,
  )
  const { ref, inView } = useInView()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY, pageType],

      queryFn: ({ pageParam }) =>
        pageType &&
        userService.getGoodsRecordList(memberId, pageType, pageParam),

      initialPageParam: 0,

      getNextPageParam: (lastPage: any) => {
        return lastPage.hasNext ? lastPage.pageNumber + 1 : undefined
      },
    })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      console.log(inView)
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (!data) return null

  const { pages } = data
  const goodsRecordList: GoodsRecord[] = pages.flatMap((page) => page.content)

  return (
    <>
      <SubHeader
        left='back'
        center={typeof pageType === 'string' ? HEADER_TEXT[pageType] : '페이지'}
      />
      <GoodsSection>
        {goodsRecordList.length === 0 ? (
          <NoGoodsList>기록이 없습니다</NoGoodsList>
        ) : (
          goodsRecordList.map((data, index) => {
            return (
              <GoodsRecordBox
                key={index}
                title={data.title}
                price={data.price}
                author={data.author}
                imageUrl={data.imageUrl}
                createdAt={data.createdAt}
                postId={data.postId}
              />
            )
          })
        )}
      </GoodsSection>
      <div ref={ref}></div>
    </>
  )
}

export default GoodsRecordPage
