import dayjs from 'dayjs'
import 'dayjs/locale/ko'

dayjs.locale('ko')

export const formatMatchTime = (date: string) => {
  return dayjs(date).format('MM월 DD일 HH시 MM분')
}
