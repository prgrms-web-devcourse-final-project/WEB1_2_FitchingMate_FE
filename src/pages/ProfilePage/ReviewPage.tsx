import PillButtonList from '@components/PillButtonList'
import { ReviewButtonWrap } from './style'
import SubHeader from '@layouts/SubHeader'

import { useEffect, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import reviewService from '@apis/reviewService'
import ReviewBoxComponent from './ReviewBoxComponent'
import { useInView } from 'react-intersection-observer'

const GOODS_REVIEW = '1'
const MATE_REVIEW = '2'

const ReviewPage = () => {
  const [selectedReview, setSelectedReview] = useState(GOODS_REVIEW)
  const { ref, inView } = useInView({
    triggerOnce: false,
  })

  const decideReviewType = (reviewType: string) => {
    if (reviewType === '1') {
      return 'goods'
    } else {
      return 'mate'
    }
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.REVIEW_LIST, selectedReview],
      queryFn: ({ pageParam }) =>
        reviewService.getReviewList(
          decideReviewType(selectedReview),
          1,
          pageParam,
        ),
      initialPageParam: 0,
      getNextPageParam: (lastPage: any) => {
        return lastPage.hasNext ? lastPage.pageNumber + 1 : undefined
      },
    })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (!data) return null

  const { pages } = data
  const reviewList = pages.flatMap((page) => page.content)

  return (
    <>
      <SubHeader
        left='back'
        center='후기 모아보기'
      />
      <section>
        <ReviewButtonWrap>
          <PillButtonList
            buttons={[
              { id: '1', text: '굿즈거래 후기', disabled: false },
              { id: '2', text: '메이트 후기', disabled: false },
            ]}
            mode='radio'
            defaultSelected={selectedReview}
            onSelect={setSelectedReview}
          />
        </ReviewButtonWrap>
        <ReviewBoxComponent
          reviewList={reviewList}
          selectedReview={selectedReview}
        />
        {hasNextPage && !isFetchingNextPage ? (
          <div
            ref={ref}
            style={{ height: '200px' }}
          ></div>
        ) : null}
      </section>
    </>
  )
}

export default ReviewPage
