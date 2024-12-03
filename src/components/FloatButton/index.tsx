import { GlobalFloatAside, GlobalFloatButton } from '@styles/globalStyle'
import { Link } from 'react-router-dom'

import Write from '@assets/icon/write.svg?react'

const FloatButton = ({ path }: { path: string }) => {
  return (
    <GlobalFloatAside>
      <GlobalFloatButton>
        <Link to={path}>
          <Write />
        </Link>
      </GlobalFloatButton>
    </GlobalFloatAside>
  )
}

export default FloatButton
