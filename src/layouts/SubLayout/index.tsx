import SubHeader from '@layouts/SubHeader'
import { SubContainer } from '@styles/globalStyle'
import { Outlet } from 'react-router-dom'

const SubLayout = () => {
  return (
    <div>
      <SubContainer>
        <Outlet />
      </SubContainer>
    </div>
  )
}

export default SubLayout
