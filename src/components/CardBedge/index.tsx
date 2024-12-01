import { Bedge } from './style'

interface CardBedgeProps {
  text: string
  style?: React.CSSProperties
}

const CardBedge = ({ text, style }: CardBedgeProps) => {
  return <Bedge style={style}>{text}</Bedge>
}

export default CardBedge
