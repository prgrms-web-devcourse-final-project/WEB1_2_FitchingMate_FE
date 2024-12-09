import ProfileBedge from '@components/ProfileBedge'
import {
  ProfileButtonWrap,
  ProfileEditWrap,
  ProfileFollowWrap,
  ProfileLinkWrap,
  ProfileMannerGraph,
  ProfileMannerGraphInner,
  ProfileMannerInfo,
  ProfileMannerNotice,
  ProfileMannerTitle,
  ProfileNotice,
  ProfilePadding,
  ProfileTopWrap,
  ProfileUserNickname,
} from './style'
import GlobalButton from '@components/GlobalButton'
import MannerIcon from '@assets/icon/baseball.svg?react'
import LinkIcon from '@assets/icon/link.svg?react'
import SubHeader from '@layouts/SubHeader'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import useGetUserInfo from '@hooks/useGetUserInfo'

import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useGetMyInfo from '@hooks/useGetMyInfo'
import { UserInfo } from '@typings/userForm'

import Alert from '@components/Alert'
import ALERT_MESSAGE from '@constants/alertMessage'
import { logoutPost } from '@apis/logoutService'
import { unregisterDelete } from '@apis/unregisterService'
import { formatManner } from '@utils/formatManner'


const ProfileMain = () => {
  const logoutAlertRef = useRef<HTMLDialogElement | null>(null) // 로그아웃용 ref
  const unregisterAlertRef = useRef<HTMLDialogElement | null>(null) // 회원탈퇴용 ref

  const navigate = useNavigate()
  const { id } = useParams()

  const loginMemberId = localStorage.getItem('memberId')

  const [userId, setUserId] = useState(id)
  const [isMyProfile, setIsMyProfile] = useState<boolean | null>(null)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  const myInfoResult = useGetMyInfo(Number(loginMemberId))
  const userInfoResult = useGetUserInfo(
    typeof id === 'string' ? Number(id) : null,
  )

  const handleLogoutClick = () => {
    if (logoutAlertRef.current) {
      logoutAlertRef.current.showModal()
    }
  }

  const confirmLogout = async () => {
    try {
      await logoutPost()
      localStorage.clear()
      if (logoutAlertRef.current) {
        logoutAlertRef.current.close()
      }
      navigate(ROUTE_PATH.HOME)
    } catch (error) {
      console.error('로그아웃 실패:', error)
      alert('로그아웃에 실패했습니다. 다시 시도해주세요.')
    }
  }

  useEffect(() => {
    if (Number(loginMemberId) === Number(userId)) {
      setIsMyProfile(true)
    } else {
      setIsMyProfile(false)
    }
  }, [userId])

  // 자기 프로필 판단해서 데이터 로드함
  useEffect(() => {
    if (isMyProfile !== null) {
      if (isMyProfile) {
        setUserInfo(myInfoResult.getMyInfo)
      } else {
        setUserInfo(userInfoResult.getUserInfo)
      }
    }
  }, [isMyProfile, myInfoResult.getMyInfo, userInfoResult.getUserInfo])

  // 프로필 수정 페이지 이동함수
  const onNavigateEdit = () => {
    navigate('/profile/edit', { state: { ...userInfo } })
  }

  return (
    <>
      <SubHeader
        left='back'
        center='프로필 페이지'
        right='logout'
        onLogoutClick={handleLogoutClick}
      />
      <Alert
        ref={logoutAlertRef}
        title={ALERT_MESSAGE.LOGOUT.title}
        notice={ALERT_MESSAGE.LOGOUT.notice}
        actionText={ALERT_MESSAGE.LOGOUT.actionText}
        cancelText={ALERT_MESSAGE.LOGOUT.cancelText}
        handleAlertClick={confirmLogout} // 확인 버튼 클릭 시 로그아웃 처리
      />
      <section>
        {/* 프로필 상단 섹션 */}
        <ProfileTopWrap>
          <ProfileEditWrap>
            <ProfileBedge
              width={5.3125}
              height={5.3125}
              imageSrc={userInfo?.imageUrl}
              myTeam={userInfo?.teamName}
            />
            <ProfileUserNickname>
              {(userInfo && userInfo.nickname) || <Skeleton />}
            </ProfileUserNickname>
            <input
              type='file'
              name=''
              id='edit_img'
              style={{ display: 'none' }}
            />
          </ProfileEditWrap>
          {/* <ProfileFollowWrap>
            <Link to={ROUTE_PATH.FOLLOW}>
              <div>
                <p>팔로우</p>
                <p>{userInfo?.followingCount}</p>
              </div>
              <div>
                <p>팔로워</p>
                <p>{userInfo?.followerCount}</p>
              </div>
            </Link>
          </ProfileFollowWrap> */}
        </ProfileTopWrap>

        {/* 프로필 소개 섹션 */}
        <ProfileNotice>
          <p
            dangerouslySetInnerHTML={{
              __html: userInfo?.aboutMe
                ? userInfo?.aboutMe.replace(/\n/g, '<br>')
                : '',
            }}
          ></p>
        </ProfileNotice>

        {/* 프로필 상단 버튼 본인 프로필 유무 */}
        <ProfilePadding paddingTop={0.75}>
          {isMyProfile ? (
            <GlobalButton
              $isNavy={true}
              text='프로필 수정'
              onClick={onNavigateEdit}
            />
          ) : (
            <ProfileButtonWrap>
              <GlobalButton
                $width={50}
                text='팔로우'
              />
              <GlobalButton
                $width={50}
                text='메세지 보내기'
                $isNavy={true}
              />
            </ProfileButtonWrap>
          )}
        </ProfilePadding>

        {/* 프로필 매너타율 랩 */}
        <ProfilePadding paddingTop={1.25}>
          <ProfileMannerTitle>매너타율</ProfileMannerTitle>
          <ProfileMannerInfo>
            <span>첫 타율 0.300</span>
            <p>
              {userInfo && formatManner(userInfo.manner)}
              <MannerIcon />
            </p>
            <ProfileMannerGraph>
              {userInfo && (
                <ProfileMannerGraphInner width={userInfo.manner * 100} />
              )}
            </ProfileMannerGraph>
          </ProfileMannerInfo>
        </ProfilePadding>

        {/* 프로필 매너타율 소개글 */}
        <ProfileMannerNotice>
          <h2>매너 타율이란?</h2>
          <p>
            타자의 타율에서 영감을 받아 유저들이 남겨준 후기를
            <br />
            바탕으로 정해지는 점수입니다
          </p>
        </ProfileMannerNotice>

        {/* 프로필 하단 이동 섹션 */}
        <ProfileLinkWrap>
          <Link to={`${ROUTE_PATH.REVIEW}/${id}`}>
            <span>후기 모아보기 {userInfo?.reviewsCount}개</span>
            <LinkIcon />
          </Link>
          <Link
            to={`${ROUTE_PATH.GOODS_RECORD}/${id}`}
            state={{ type: 'sold' }}
          >
            <span>굿즈 판매기록 {userInfo?.goodsSoldCount}개</span>
            <LinkIcon />
          </Link>
          {isMyProfile ? (
            <>
              <Link
                to={`${ROUTE_PATH.GOODS_RECORD}/${id}`}
                state={{ type: 'bought' }}
              >
                <span>굿즈 구매기록 {userInfo?.goodsBoughtCount}개</span>
                <LinkIcon />
              </Link>
              <Link to={ROUTE_PATH.TIMELINE}>
                <span>직관 보관기록 {userInfo?.visitsCount}개</span>
                <LinkIcon />
              </Link>
            </>
          ) : null}
        </ProfileLinkWrap>
        <ProfilePadding paddingTop={1.25}>
          <GlobalButton
            $isNavy={false}
            text='회원탈퇴'
            onClick={() => {
              if (unregisterAlertRef.current) {
                unregisterAlertRef.current.showModal()
              }
            }}
          />
        </ProfilePadding>
        <Alert
          ref={unregisterAlertRef}
          title={ALERT_MESSAGE.UNREGISTER.title}
          notice={ALERT_MESSAGE.UNREGISTER.notice}
          actionText={ALERT_MESSAGE.UNREGISTER.actionText}
          cancelText={ALERT_MESSAGE.UNREGISTER.cancelText}
          handleAlertClick={async () => {
            try {
              await unregisterDelete()
              localStorage.clear()
              navigate(ROUTE_PATH.HOME)
              toast.success('회원탈퇴가 완료되었습니다.')
            } catch (error) {
              console.error('회원탈퇴 실패:', error)
              toast.error('회원탈퇴에 실패했습니다. 다시 시도해주세요.')
            }
          }}
        />
      </section>
    </>
  )
}

export default ProfileMain
