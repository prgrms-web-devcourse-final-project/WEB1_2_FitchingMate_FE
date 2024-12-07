import SubHeader from '@layouts/SubHeader'
import { TimelineWrap } from './style'
import TimelineBox from './TimelineBox'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import reviewService from '@apis/reviewService'

const TimelinePage = () => {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [QUERY_KEY.TIMELINE_LIST],

      queryFn: ({ pageParam }) => reviewService.getTimelineList(pageParam),

      initialPageParam: 0,

      getNextPageParam: (lastPage: any) => {
        return lastPage.hasNext ? lastPage.pageNumber + 1 : undefined
      },
    })

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
  const timelineList = pages.flatMap((page) => page.content)

  return (
    <>
      <SubHeader
        left='back'
        center='직관 기록페이지'
      />
      <TimelineWrap>
        {timelineList.map((match, index) => {
          return (
            <TimelineBox
              key={index}
              info={match}
            />
          )
        })}
        {hasNextPage && (
          <div
            ref={loadMoreRef}
            style={{ height: '200px' }}
          ></div>
        )}
      </TimelineWrap>
    </>
  )
}

export default TimelinePage
