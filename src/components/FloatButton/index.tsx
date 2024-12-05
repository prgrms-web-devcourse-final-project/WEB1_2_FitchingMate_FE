import {
  GlobalFloatAside,
  GlobalFloatButton,
  GlobalUpButton,
} from '@styles/globalStyle'
import { Link } from 'react-router-dom'

import Write from '@assets/icon/write.svg?react'
import Up from '@assets/icon/float_up.svg?react'

interface FloatButtonProps {
  path: string
  handleUpButtonClick: () => void
}

const FloatButton = ({ path, handleUpButtonClick }: FloatButtonProps) => {
  return (
    <GlobalFloatAside>
      <GlobalUpButton onClick={handleUpButtonClick}>
        <Up
          width={17}
          height={17}
        />
      </GlobalUpButton>
      <GlobalFloatButton>
        <Link to={path}>
          <Write />
        </Link>
      </GlobalFloatButton>
    </GlobalFloatAside>
  )
}

export default FloatButton
