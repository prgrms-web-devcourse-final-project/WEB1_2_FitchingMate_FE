import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

export const formatMatchTime = (date: string) => {
  return dayjs(date).format('MM/DD - HH:MM')
}

export const formatReviewPageTime = (date: string) => {
  return dayjs(date).format('YYYY년 MM월 DD일')
}
