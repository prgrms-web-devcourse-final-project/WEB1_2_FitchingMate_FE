import SubHeader from '@layouts/SubHeader'
import { GlobalContainer } from '@styles/globalStyle'
import { Outlet } from 'react-router-dom'

const SubLayout = () => {
  return (
    <div>
      <GlobalContainer>
        <Outlet />
      </GlobalContainer>
    </div>
  )
}

export default SubLayout
