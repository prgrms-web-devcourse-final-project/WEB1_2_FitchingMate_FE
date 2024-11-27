import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
import ChatPage from '@pages/ChatPage'
import ChatRoom from '@pages/ChatRoom'
import ErrorPage from '@pages/ErrorPage'
import NotificationPage from '@pages/NotificationPage'
import GoodsPostingPage from '@pages/GoodsPostingPage'
import MatePostingPage from '@pages/MatePostingPage'
import ReviewWritePage from '@pages/ReviewWritePage'
import { Routes, Route } from 'react-router-dom'
import MateListPage from '@pages/MateListPage'
import SplashPage from '@pages/SplashPage'
import LoginPage from '@pages/LoginPage'
import SignupPage from '@pages/LoginPage/SignupPage'
import GoodsDetailPage from '@pages/GoodsDetailPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path='/' />
        <Route
          path='/chat'
          element={<ChatPage />}
        />
        <Route
          path='/matelist'
          element={<MateListPage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/login/signup'
          element={<SignupPage />}
        />
      </Route>

      <Route element={<SubLayout />}>
        <Route
          path='/goods-posting'
          element={<GoodsPostingPage />}
        />
        <Route
          path='/mate-posting'
          element={<MatePostingPage />}
        />
        <Route
          path='/chat-room'
          element={<ChatRoom />}
        />
        <Route
          path='/goodsdetail'
          element={<GoodsDetailPage />}
        />
      </Route>

      <Route
        path='*'
        element={<ErrorPage />}
      />

      <Route
        path='/notification'
        element={<NotificationPage />}
      />
    </Routes>
  )
}

export default AppRoutes
