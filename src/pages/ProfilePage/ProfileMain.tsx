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

import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface UserInfo {
  aboutMe: string
  followerCount: number
  followingCount: number
  goodsSoldCount: number
  imageUrl: string
  manner: number
  nickname: string
  reviewsCount: number
  teamName: string
}

const ProfileMain = () => {
  const navigate = useNavigate()
  const [isMyProfile, setIsMyProfile] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  const { getUserInfo, isError, isPending, error } = useGetUserInfo(1)

  useEffect(() => {
    setTimeout(() => {
      setUserInfo(getUserInfo)
    }, 2000)
  }, [getUserInfo])

  const onNavigateEdit = () => {
    navigate('/profile/edit')
  }

  return (
    <>
      <SubHeader
        left='back'
        center='프로필 페이지'
      />
      <section>
        {/* 프로필 상단 섹션 */}
        <ProfileTopWrap>
          <ProfileEditWrap>
            {isPending ? (
              <Skeleton
                circle
                width={'6.25em'}
                height={'6.25em'}
              />
            ) : (
              <ProfileBedge
                width={6.25}
                height={6.25}
                imageSrc={userInfo?.imageUrl}
                myTeam={userInfo?.teamName}
              />
            )}
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
          <ProfileFollowWrap>
            <div>
              <p>팔로우</p>
              <p>{isPending ? <Skeleton /> : userInfo?.followingCount}</p>
            </div>
            <div>
              <p>팔로워</p>
              <p>{isPending ? <Skeleton /> : userInfo?.followerCount}</p>
            </div>
          </ProfileFollowWrap>
        </ProfileTopWrap>

        {/* 프로필 소개 섹션 */}
        <ProfileNotice>
          <p>{(userInfo && userInfo.aboutMe) || <Skeleton />}</p>
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
              {(userInfo && userInfo.manner) || (
                <Skeleton containerClassName='skeleton-flex' />
              )}
              <MannerIcon />
            </p>
            <ProfileMannerGraph>
              {(userInfo && (
                <ProfileMannerGraphInner width={userInfo.manner * 100} />
              )) || <Skeleton />}
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
          <Link to={ROUTE_PATH.REVIEW}>
            {(userInfo && (
              <>
                <span>후기 모아보기 {userInfo.reviewsCount}개</span>
                <LinkIcon />
              </>
            )) || <Skeleton containerClassName='skeleton-flex' />}
          </Link>
          <Link to={ROUTE_PATH.GOODS_RECORD}>
            {(userInfo && (
              <>
                <span>굿즈 판매기록 {userInfo.goodsSoldCount}개</span>
                <LinkIcon />
              </>
            )) || <Skeleton containerClassName='skeleton-flex' />}
          </Link>
          {isMyProfile ? (
            <>
              <Link to={ROUTE_PATH.GOODS_RECORD}>
                <span>굿즈 구매기록 16개</span>
                <LinkIcon />
              </Link>
              <Link to={ROUTE_PATH.TIMELINE}>
                <span>직관 보관기록 16개</span>
                <LinkIcon />
              </Link>
            </>
          ) : null}
        </ProfileLinkWrap>
      </section>
    </>
  )
}

export default ProfileMain
