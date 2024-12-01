import SubHeader from '@layouts/SubHeader'
import { SubGlobalContainer } from '@styles/globalStyle'
import { Outlet } from 'react-router-dom'

const SubLayout = () => {
  return (
    <div>
      <SubGlobalContainer>
        <Outlet />
      </SubGlobalContainer>
    </div>
  )
}

export default SubLayout
