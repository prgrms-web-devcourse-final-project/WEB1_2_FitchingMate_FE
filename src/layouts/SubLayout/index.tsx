import { SubGlobalContainer } from '@styles/globalStyle'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const SubLayout = () => {
  return (
    <>
      <SubGlobalContainer>
        <ToastContainer />
        <Outlet />
      </SubGlobalContainer>
    </>
  )
}

export default SubLayout
