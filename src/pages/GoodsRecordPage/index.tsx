import SubHeader from '@layouts/SubHeader'
import GoodsRecordBox from './GoodsRecordBox'
import { GoodsSection, NoGoodsList } from './style'

import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import userService from '@apis/userService'
import { useInView } from 'react-intersection-observer'
import { RefContainer } from '@styles/globalStyle'
import Spinner from '@components/Spinner'
import { toast } from 'react-toastify'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

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
  const navigate = useNavigate()
  const { id } = useParams()
  const currentUserId = localStorage.getItem('memberId')
  const [pageType, setPageType] = useState<('sold' | 'bought') | null>(
    location.state.type,
  )
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY, pageType],

      queryFn: ({ pageParam }) =>
        pageType &&
        userService.getGoodsRecordList(Number(id), pageType, pageParam),

      initialPageParam: 0,

      getNextPageParam: (lastPage: any) => {
        return lastPage.hasNext ? lastPage.pageNumber + 1 : undefined
      },
    })

  useEffect(() => {
    window.scrollTo(0, 0)
    if (pageType === 'bought') {
      currentUserId !== id &&
        (toast('굿즈 구매기록은 본인만 볼수있습니다.'),
        navigate(ROUTE_PATH.HOME))
    }
  }, [])

  useEffect(() => {
    if (isFetchingNextPage || !hasNextPage) return
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchNextPage()
          }
        },
        { threshold: 1.0 },
      )
    }
    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current)
    }
    return () => {
      if (observerRef.current && loadMoreRef.current) {
        observerRef.current.unobserve(loadMoreRef.current)
      }
    }
  }, [isFetchingNextPage, hasNextPage, fetchNextPage])

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
      {hasNextPage && (
        <RefContainer ref={loadMoreRef}>
          {isFetchingNextPage && <Spinner />}
        </RefContainer>
      )}
    </>
  )
}

export default GoodsRecordPage
