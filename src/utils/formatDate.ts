import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'

dayjs.locale('ko')
dayjs.extend(relativeTime)
export const formatMatchTime = (date: string) => {
  return dayjs(date).format('MM/DD - HH:MM')
}

export const formatReviewPageTime = (date: string) => {
  return dayjs(date).format('YYYY년 MM월 DD일')
}

export const formatTimelineDate = (date: string) => {
  return dayjs(date).format('YYYY.MM.DD')
}

export const formatChatTime = (date: string) => {
  return dayjs(date).fromNow()
}
