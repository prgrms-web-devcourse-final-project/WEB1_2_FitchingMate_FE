import { useEffect, useState } from 'react'
import { Bedge } from './style'
import { kboTeamInfo } from '@constants/kboInfo'

const CardBedge = ({ text }: { text?: string }) => {
  const [bgColor, setBgColor] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (text !== '거래완료') {
      text && kboTeamInfo[text]
        ? setBgColor(kboTeamInfo[text].color)
        : undefined
    } else {
      setBgColor('#D9D9D9')
    }
  }, [])

  return <Bedge $bgcolor={bgColor}>{text || '벳지'}</Bedge>
}

export default CardBedge
