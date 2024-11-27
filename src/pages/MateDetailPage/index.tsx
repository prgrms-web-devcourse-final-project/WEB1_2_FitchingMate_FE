import { MateDetailPageContainer, MateDetailDescription, MateDetailPhoto, UserInfoListWrapper } from './style'
import UserInfoList from '@components/UserInfoList'
import MateDetailCard from './MateDetailCard'
import MateDetailAction from './MateDetailAction'
import MateDetailDefaultPhoto from '@assets/default/detail_test.jpg'

const MateDetailPage = () => {
  return (
    <MateDetailPageContainer>
      <MateDetailPhoto src={MateDetailDefaultPhoto} alt='피치메이트 이미지' />
      <MateDetailCard />
      <UserInfoListWrapper>
        <UserInfoList />
      </UserInfoListWrapper>
      <MateDetailDescription placeholder='내용을 입력해주세요.'/>
      <MateDetailAction />
    </MateDetailPageContainer>
  )
}

export default MateDetailPage
