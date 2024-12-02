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
import { Routes, Route, Navigate } from 'react-router-dom'
import GoodsDetailPage from '@pages/GoodsDetailPage'
import GoodsListPage from '@pages/GoodsListPage'
import FollowPage from '@pages/FollowPage'
import GoodsRecordPage from '@pages/GoodsRecordPage'
import ProfileMain from '@pages/ProfilePage/ProfileMain'
import ProfileEdit from '@pages/ProfilePage/ProfileEdit'
import ReviewPage from '@pages/ProfilePage/ReviewPage'
import TimelinePage from '@pages/TimelinePage'
import RedirectHandler from '@pages/LoginPage/AuthCallback/RedirectHandler'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route
          path='/'
          element={
            <Navigate
              to={ROUTE_PATH.HOME}
              replace
            />
          }
        />
        <Route
          path={ROUTE_PATH.HOME}
          element={<MainPage />}
        />
        <Route
          path={ROUTE_PATH.CHAT}
          element={<ChatPage />}
        />
        <Route
          path={ROUTE_PATH.MATE_LIST}
          element={<MateListPage />}
        />
        <Route
          path={ROUTE_PATH.LOGIN}
          element={<LoginPage />}
        />
        <Route
          path={ROUTE_PATH.SIGNUP}
          element={<SignupPage />}
        />
        <Route
          path={ROUTE_PATH.MYTEAM}
          element={<MyTeamPage />}
        />
        <Route
          path={ROUTE_PATH.GOODS_LIST}
          element={<GoodsListPage />}
        />
      </Route>
      <Route element={<SubLayout />}>
        <Route
          path={ROUTE_PATH.GOODS_POSTING}
          element={<GoodsPostingPage />}
        />
        <Route
          path={ROUTE_PATH.MATE_POSTING}
          element={<MatePostingPage />}
        />
        <Route
          path={ROUTE_PATH.CHAT_ROOM}
          element={<ChatRoom />}
        />
        <Route
          path={ROUTE_PATH.MATE_DETAIL}
          element={<MateDetailPage />}
        />
        <Route path={ROUTE_PATH.GOODS_DETAIL}>
          <Route
            index
            element={<GoodsDetailPage />}
          />
          <Route
            path='edit'
            element={<GoodsPostingPage />}
          />
        </Route>
        <Route
          path={ROUTE_PATH.GOODS_RECORD}
          element={<GoodsRecordPage />}
        />
        <Route
          path={ROUTE_PATH.FOLLOW}
          element={<FollowPage />}
        />
        <Route
          path={ROUTE_PATH.PROFILE}
          element={<ProfileMain />}
        />
        <Route
          path={ROUTE_PATH.PROFILE_EDIT}
          element={<ProfileEdit />}
        />
        <Route
          path={ROUTE_PATH.REVIEW}
          element={<ReviewPage />}
        />
        <Route
          path={ROUTE_PATH.REVIEW_WRITE}
          element={
            <ReviewWritePage
              reviewType='GOODS'
              title='string'
              username='유저네임'
            />
          }
        />
        <Route
          path={ROUTE_PATH.TIMELINE}
          element={<TimelinePage />}
        />
      </Route>

      <Route
        path='*'
        element={<ErrorPage />}
      />

      <Route
        path={ROUTE_PATH.NOTIFICATION}
        element={<NotificationPage />}
      />

      <Route
        path={ROUTE_PATH.NAVER_LOGIN}
        element={<RedirectHandler />}
      />
    </Routes>
  )
}

export default AppRoutes
