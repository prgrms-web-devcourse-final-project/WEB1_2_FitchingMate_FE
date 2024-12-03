import {
  MateDetailPageContainer,
  MateDetailDescription,
  MateDetailPhoto,
  UserInfoListWrapper,
  MateDetailActionWrapper,
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
        <MateDetailDescription>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, autem. Sint ab et impedit odit error iste laborum provident voluptatum quos assumenda. Sed expedita consequatur molestiae ullam architecto dolores odit.
          Error, accusamus modi incidunt inventore numquam voluptatibus beatae eveniet, sed autem nulla eaque. Placeat aliquam enim laboriosam maiores quo nihil nisi minima voluptatum accusantium explicabo. Excepturi eius odit consequatur eaque.
          Corporis quibusdam odit voluptate dolores excepturi iusto et explicabo perspiciatis quam. Facilis soluta eum aliquam debitis dolore minima, odio quam, veritatis voluptatem corporis tenetur, sed illum ipsa voluptates inventore. Id.
          Tempore cumque recusandae dolor similique nesciunt minus assumenda, pariatur molestiae, fugit vel nisi nemo nihil facere. Nostrum saepe autem corrupti! Impedit beatae deserunt consectetur natus enim nulla voluptate vero sunt.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, sunt officiis repellendus cupiditate culpa vitae ipsa ab, minima eveniet esse ea, maiores quidem. Natus fugit laborum itaque doloremque odit reprehenderit.</p>
        </MateDetailDescription>
        <MateDetailActionWrapper>
          <MateDetailAction />
        </MateDetailActionWrapper>
      </MateDetailPageContainer>
    </>
  )
}

export default MateDetailPage
