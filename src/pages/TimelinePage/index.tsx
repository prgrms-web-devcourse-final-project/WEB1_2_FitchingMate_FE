import SubHeader from '@layouts/SubHeader'
import { TimelineWrap } from './style'
import TimelineBox from './TimelineBox'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@apis/queryClient'
import reviewService from '@apis/reviewService'

const TimelinePage = () => {
  const { ref, inView } = useInView()

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
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (!data) return null

  const { pages } = data
  const timelineList = pages.flatMap((page) => page.content)
  console.log(timelineList)

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
        <div ref={ref}></div>
      </TimelineWrap>
    </>
  )
}

export default TimelinePage
