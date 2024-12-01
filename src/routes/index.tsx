import GlobalLayout from '@layouts/GlobalLayout'
import SubLayout from '@layouts/SubLayout'
import ChatPage from '@pages/ChatPage'
import ChatRoom from '@pages/ChatRoom'
import ErrorPage from '@pages/ErrorPage'
import NotificationPage from '@pages/NotificationPage'
import GoodsPostingPage from '@pages/GoodsPostingPage'
import MatePostingPage from '@pages/MatePostingPage'
import ReviewWritePage from '@pages/ReviewWritePage'
import MateListPage from '@pages/MateListPage'
import SplashPage from '@pages/SplashPage'
import LoginPage from '@pages/LoginPage'
import SignupPage from '@pages/LoginPage/SignupPage'
import MyTeamPage from '@pages/MyTeamPage'
import MateDetailPage from '@pages/MateDetailPage'
import MainPage from '@pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import GoodsDetailPage from '@pages/GoodsDetailPage'
import GoodsListPage from '@pages/GoodsListPage'
import FollowPage from '@pages/FollowPage'
import GoodsRecordPage from '@pages/GoodsRecordPage'
import ProfileMain from '@pages/ProfilePage/ProfileMain'
import ProfileEdit from '@pages/ProfilePage/ProfileEdit'
import ReviewPage from '@pages/ProfilePage/ReviewPage'
import TimelinePage from '@pages/TimelinePage'
import RedirectHandler from '@pages/LoginPage/AuthCallback/RedirectHandler'

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
          path='/main'
          element={<MainPage />}
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
        <Route
          path='/myteam'
          element={<MyTeamPage />}
        />
        <Route
          path='/goodslist'
          element={<GoodsListPage />}
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
          path='/mate-detail'
          element={<MateDetailPage />}
        />
        <Route
          path='/goodsdetail'
          element={<GoodsDetailPage />}
        />
        <Route
          path='/goodsrecord'
          element={<GoodsRecordPage />}
        />
        <Route
          path='/follow'
          element={<FollowPage />}
        />
        <Route
          path='/profile'
          element={<ProfileMain />}
        />
        <Route
          path='/profile/edit'
          element={<ProfileEdit />}
        />
        <Route
          path='/review'
          element={<ReviewPage />}
        />
        <Route
          path='/review/write'
          element={
            <ReviewWritePage
              reviewType='GOODS'
              title='string'
              username='유저네임'
            />
          }
        />
        <Route
          path='/timeline'
          element={<TimelinePage />}
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

      <Route
        path='/api/auth/login/naver'
        element={<RedirectHandler />}
      />
    </Routes>
  )
}

export default AppRoutes
