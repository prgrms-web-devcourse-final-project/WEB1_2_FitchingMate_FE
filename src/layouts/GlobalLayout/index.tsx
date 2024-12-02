import Header from '@layouts/Header'
import GlobalNav from '@layouts/GlobalNav'
import { Outlet } from 'react-router-dom'
import { GlobalContainer } from '@styles/globalStyle'

const GlobalLayout = () => {
  return (
    <>
      <Header />
      <GlobalContainer>
        <Outlet />
      </GlobalContainer>
      <GlobalNav />
    </>
  )
}

export default GlobalLayout
