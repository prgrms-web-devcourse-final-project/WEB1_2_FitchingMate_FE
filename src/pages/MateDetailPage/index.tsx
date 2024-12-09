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

  /**
   * 메이트 게시글 조회
   * @params matePostId 게시글 id
   * @queryKey [QUERY_KEY.MATE_POST, matePostId]
   *
   * 추후 로딩 에러 처리 필요
   */

  const {
    data: matePost,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.MATE_POST, matePostId],

    queryFn: () => matePostService.getMatePost(matePostId as string),

    enabled: !!matePostId,
  })

  /**
   * 메이트 게시글 삭제
   * @params memberId 회원 id
   * @params matePostId 게시글 id
   *
   * 현재는 success 시 메이트 게시글 목록 조회 쿼리 업데이트
   *
   * 추후 로딩 에러 처리 필요
   * 콘솔 제거 필요
   */

  const {
    mutate: deletePost,
    isPending: isDeletingPost,
    isError: isDeleteError,
    error: deleteError,
  } = useMutation({
    mutationFn: () => matePostService.deleteMatePost(matePostId as string),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.MATE_POST] })
      navigate(ROUTE_PATH.MATE_LIST, {
        state: { isDeleteSuccess: true },
      })
    },

    onSettled: (data) => {
      console.log(data)
    },
  })

  // 게시글 삭제 알럿창
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
