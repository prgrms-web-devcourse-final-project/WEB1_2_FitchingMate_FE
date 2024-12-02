import { TimelineWrap } from './style'
import TimelineBox from './TimelineBox'

import { data } from './mockData'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import SubHeader from '@layouts/SubHeader'

console.log(data.length)

const TimelinePage = () => {
  const [timelineData, setTimelineData] = useState(data.slice(0, 5))
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView && hasMore) {
      const nextPageData = data.slice(page * 5, page * 5 + 5)
      setTimelineData((prev) => [...prev, ...nextPageData])
      setPage(page + 1)
      if (nextPageData.length < 5) {
        setHasMore(false)
      }
    }
  }, [inView, hasMore, page])

  return (
    <>
      <SubHeader
        left='back'
        center='직관 기록페이지'
      />
      <TimelineWrap>
        {timelineData.map((match, index) => {
          return (
            <TimelineBox
              info={match}
              key={index}
            />
          )
        })}
        <div ref={ref}></div>
      </TimelineWrap>
    </>
  )
}

export default TimelinePage
