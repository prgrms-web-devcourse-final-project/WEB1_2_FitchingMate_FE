import SubHeader from '@layouts/SubHeader'
import { SubGlobalContainer } from '@styles/globalStyle'
import { Outlet } from 'react-router-dom'

const SubLayout = () => {
  return (
    <div>
      <SubHeader
        left='exit'
        center='디테일 페이지'
        right='alarm'
      />
      <SubGlobalContainer>
        <Outlet />
      </SubGlobalContainer>
    </div>
  )
}

export default SubLayout
