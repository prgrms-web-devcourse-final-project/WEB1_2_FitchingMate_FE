import { SubGlobalContainer } from '@styles/globalStyle'
import { Outlet } from 'react-router-dom'

const SubLayout = () => {
  return (
    <>
      <SubGlobalContainer>
        <Outlet />
      </SubGlobalContainer>
    </>
  )
}

export default SubLayout
