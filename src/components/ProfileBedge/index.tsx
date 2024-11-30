import { ProfileImage, ProfileMyTeamWrap, ProfileWrap } from './style'

import DefaultProfile from '@assets/default/default_profile.svg?react'
import { kboTeamInfo } from '@constants/kboInfo'

interface ProfileBedgePropTypes {
  width: number
  height: number
  imageSrc?: string
  myTeam?: keyof typeof kboTeamInfo
  isChat?: boolean
}

const ProfileBedge = ({
  width,
  height,
  imageSrc,
  myTeam,
  isChat,
}: ProfileBedgePropTypes) => {
  const renderMyTeam = () => {
    const teamInfo = myTeam ? kboTeamInfo[myTeam] : kboTeamInfo['전체']
    return <teamInfo.logo />
  }

  return (
    <ProfileWrap
      width={width}
      height={height}
    >
      {imageSrc ? <ProfileImage src={imageSrc} /> : <DefaultProfile />}
      {!isChat && <ProfileMyTeamWrap>{renderMyTeam()}</ProfileMyTeamWrap>}
    </ProfileWrap>
  )
}

export default ProfileBedge
