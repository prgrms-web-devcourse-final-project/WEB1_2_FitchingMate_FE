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
import SubHeader from '@layouts/SubHeader'
import { QUERY_KEY } from '@apis/queryClient'
import { useQuery } from '@tanstack/react-query'
import matePostService from '@apis/matePostService'
import { useParams } from 'react-router-dom'
import MateCard from '@components/MateCard'

const MateDetailPage = () => {
  const { id: matePostId } = useParams()

  const { data: matePost } = useQuery({
    queryKey: [QUERY_KEY.MATE_POST],

    queryFn: () => matePostService.getMatePost(matePostId as string),

    enabled: !!matePostId,
  })

  if (!matePost) return

  const {
    manner,
    nickname,
    content,
    userImageUrl,
    postImageUrl,
    title,
    rivalTeamName,
    status,
    location,
    maxParticipants,
    myTeamName,
    rivalMatchTime,
  } = matePost

  const mateHost = {
    manner,
    nickname,
    imageUrl: userImageUrl,
    rivalMatchTime,
  }

  return (
    <>
      <SubHeader
        left='back'
        center='메이트 구하기'
      />
      <MateDetailPageContainer>
        <MateDetailPhoto
          src={postImageUrl}
          alt='피치메이트 이미지'
        />
        <MateCard
          card={matePost}
          $isDetailPage={true}
        />
        <UserInfoListWrapper>
          <UserInfoList seller={mateHost} />
        </UserInfoListWrapper>
        <MateDetailDescription>{content}</MateDetailDescription>
        <MateDetailActionWrapper>
          <MateDetailAction />
        </MateDetailActionWrapper>
      </MateDetailPageContainer>
    </>
  )
}

export default MateDetailPage
