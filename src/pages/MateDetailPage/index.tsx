import {
  MateDetailPageContainer,
  MateDetailDescription,
  MateDetailPhoto,
  UserInfoListWrapper,
  MateDetailActionWrapper,
} from './style'
import UserInfoList from '@components/UserInfoList'
import MateDetailAction from './MateDetailAction'
import SubHeader from '@layouts/SubHeader'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { useMutation, useQuery } from '@tanstack/react-query'
import matePostService from '@apis/matePostService'
import { useNavigate, useParams } from 'react-router-dom'
import MateCard from '@components/MateCard'
import Alert from '@components/Alert'
import { useModal } from '@hooks/useModal'
import ALERT_MESSAGE from '@constants/alertMessage'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'

const MateDetailPage = () => {
  const { id: matePostId } = useParams()
  const navigate = useNavigate()

  const { data: matePost } = useQuery({
    queryKey: [QUERY_KEY.MATE_POST],

    queryFn: () => matePostService.getMatePost(matePostId as string),

    enabled: !!matePostId,
  })

  const { mutate: deletePost, isPending: isDeletingPost } = useMutation({
    mutationFn: () => matePostService.deleteMatePost(1, matePostId as string),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_POST] })
      navigate(ROUTE_PATH.MATE_LIST)
    },

    onSettled: (data) => {
      console.log(data)
    },
  })

  const { alertRef, handleAlertClick } = useModal()

  if (!matePost) return

  const {
    manner,
    nickname,
    content,
    userImageUrl,
    postImageUrl,
    rivalMatchTime,
    title,
    status,
    myTeamName,
    rivalTeamName,
    location,
    maxParticipants,
    age,
    gender,
    transportType,
    postId,
  } = matePost

  const mateCard = {
    age,
    gender,
    transportType,
    postId,
    title,
    status,
    myTeamName,
    rivalTeamName,
    imageUrl: postImageUrl,
    matchTime: rivalMatchTime,
    location,
    maxParticipants,
  }

  const mateHost = {
    manner,
    nickname,
    imageUrl: userImageUrl,
    rivalMatchTime,
  }

  const handleDeletePost = () => {
    deletePost()
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
          card={mateCard}
          $isDetailPage
        />
        <UserInfoListWrapper>
          <UserInfoList seller={mateHost} />
        </UserInfoListWrapper>
        <MateDetailDescription>{content}</MateDetailDescription>
        <MateDetailActionWrapper>
          <MateDetailAction
            matePost={matePost}
            handleAlertClick={handleAlertClick}
          />
        </MateDetailActionWrapper>
      </MateDetailPageContainer>

      <Alert
        ref={alertRef}
        {...ALERT_MESSAGE.DELETE_POST}
        handleAlertClick={handleDeletePost}
      />
    </>
  )
}

export default MateDetailPage
