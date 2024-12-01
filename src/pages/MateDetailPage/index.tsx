import {
  MateDetailPageContainer,
  MateDetailDescription,
  MateDetailPhoto,
  UserInfoListWrapper,
} from './style'
import UserInfoList from '@components/UserInfoList'
import MateDetailCard from './MateDetailCard'
import MateDetailAction from './MateDetailAction'
import MateDetailDefaultPhoto from '@assets/default/detail_test.jpg'
import SubHeader from '@layouts/SubHeader'

const MateDetailPage = () => {
  return (
    <>
      <SubHeader
        left='back'
        center='메이트 구하기'
      />
      <MateDetailPageContainer>
        <MateDetailPhoto
          src={MateDetailDefaultPhoto}
          alt='피치메이트 이미지'
        />
        <MateDetailCard />
        <UserInfoListWrapper>
          <UserInfoList />
        </UserInfoListWrapper>
        <MateDetailDescription placeholder='내용을 입력해주세요.' />
        <MateDetailAction />
      </MateDetailPageContainer>
    </>
  )
}

export default MateDetailPage
