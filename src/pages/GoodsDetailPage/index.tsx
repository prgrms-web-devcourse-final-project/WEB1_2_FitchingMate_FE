import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import {
  GoodsBedgeWrap,
  GoodsBottomButton,
  GoodsBottomButtonWrap,
  GoodsBottomWrap,
  GoodsDetailMapInner,
  GoodsDetailMapWrap,
  GoodsDetailText,
  GoodsDetailTop,
  GoodsDetailWrap,
  GoodsNoticeWrap,
  GoodsPriceText,
  PaginationContainer,
  SwiperContainer,
  SwiperSlideInner,
} from './style'

import 'swiper/css'
import 'swiper/css/pagination'
import UserInfoList from '@components/UserInfoList'
import CardBedge from '@components/CardBedge'
import { GlobalFloatAside } from '@styles/globalStyle'
import { useEffect, useState } from 'react'

import SubHeader from '@layouts/SubHeader'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import goodsService from '@apis/goodsService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { formatPriceWithComma } from '@utils/formatPrice'
import goodsPostService from '@apis/goodsPostService'
import queryClient, { QUERY_KEY } from '@apis/queryClient'
import { ROUTE_PATH } from '@constants/ROUTE_PATH'
import { transformGoodsDetailToFormData } from '@utils/formatPostData'
import { useGoodsFormStore } from '@store/useGoodsFormStore'
import Alert from '@components/Alert'
import ALERT_MESSAGE from '@constants/alertMessage'
import { useModal } from '@hooks/useModal'
import goodsChatService from '@apis/goodsChatService'
import KakaoMapContainer from './KakaoMapContainer'

const GoodsDetailPage = () => {
  const [isOwner, setIsOwner] = useState(false)
  const [isAble, setIsAble] = useState(true)

  const { id: goodsId } = useParams()

  /**
   * 굿즈 게시글 상세 조회
   *
   * @param goodsId 굿즈 게시글 id
   * @queryKey [QUERY_KEY.GOODS_POST, goodsId]
   *
   * 추후 로딩 에러 처리 필요
   */

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY.GOODS_POST, goodsId],

    queryFn: () => goodsService.getGoodsDetail(goodsId as string),

    enabled: !!goodsId,
  })

  /**
   * 굿즈 게시글 삭제
   *
   * @param memberId 회원 id
   * @param goodsPostId 굿즈 게시글 id
   *
   * 추후 로딩 에러 처리 필요
   */

  const {
    mutate: deleteGoodsPost,
    isPending: isDeletePending,
    isError: isDeleteError,
    error: deleteError,
  } = useMutation({
    mutationFn: (data: { memberId: number; goodsPostId: number }) =>
      goodsPostService.deleteGoodsPost(data.memberId, data.goodsPostId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOODS_LIST] })
      navigate(ROUTE_PATH.GOODS_LIST)
    },
  })

  /**
   * 굿즈 채팅방 생성 요청
   *
   * @param buyerId 구매자 아이디 ( 본인 회원 ID)
   * @param goodsPostId 굿즈 게시글 아이디
   *
   * 체크완료 추후 수정 필요
   */

  const { mutate: createGoodsChatroom } = useMutation({
    mutationFn: () =>
      goodsChatService.createGoodsChatroom(3, goodsId as string),

    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  // 굿즈 게시글 수정 폼 데이터 관리
  const { setGoods, setImageList } = useGoodsFormStore()

  // 경로 관리
  const { pathname } = useLocation()
  const navigate = useNavigate()

  // 알럿 관리
  const { alertRef, handleAlertClick } = useModal()

  if (!data) return null

  // 굿즈 게시글 삭제 버튼 클릭 이벤트 = > 알럿 오픈
  const handleClickDeleteButton = () => {
    handleAlertClick()
  }

  // 알럿에서 굿즈 게시글 삭제 처리
  const handleDeleteGoodsPost = () => {
    deleteGoodsPost({
      memberId: data.seller.memberId, // 추후 본인 회원 ID 넣기
      goodsPostId: data.id,
    })
  }

  // 굿즈 게시글 수정 버튼 클릭 이벤트 = > 굿즈 게시글 수정 폼 데이터 관리
  const handleClickEditButton = () => {
    const formattedData = transformGoodsDetailToFormData(data)
    const { goods, imageList } = formattedData

    setGoods(goods)
    setImageList(imageList)

    navigate(`${pathname}/edit`, {
      state: { isEdit: true, goodsPostId: data.id },
    })
  }

  const {
    seller,
    imageUrls,
    title,
    category,
    teamName,
    status,
    content,
    location,
    price,
  } = data

  return (
    <GoodsDetailWrap>
      <SubHeader
        left='back'
        center='굿즈 거래하기'
      />
      <section>
        <SwiperContainer>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ el: '.custom-pagination', clickable: true }}
            modules={[Pagination]}
          >
            {imageUrls.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <SwiperSlideInner>
                  <img
                    src={imageUrl}
                    alt={`${data.title}-${index}`}
                  />
                </SwiperSlideInner>
              </SwiperSlide>
            ))}
          </Swiper>
          <PaginationContainer className='custom-pagination' />
        </SwiperContainer>
        <GoodsDetailTop>
          <GoodsBedgeWrap>
            <div>
              <CardBedge text={category} />
              <CardBedge text={teamName} />
            </div>
            <div>
              <CardBedge text={status} />
            </div>
          </GoodsBedgeWrap>
          <p>{title}</p>
          <UserInfoList seller={seller} />
        </GoodsDetailTop>

        <GoodsNoticeWrap>
          <GoodsDetailText>{content}</GoodsDetailText>
          <GoodsDetailMapWrap>
            <h2>거래 장소</h2>
            <p>{location.placeName}</p>
            <GoodsDetailMapInner>
              <KakaoMapContainer
                latitude={location.latitude}
                longitude={location.longitude}
              />
            </GoodsDetailMapInner>
          </GoodsDetailMapWrap>
        </GoodsNoticeWrap>

        <GlobalFloatAside>
          <GoodsBottomWrap>
            <GoodsPriceText>
              {formatPriceWithComma(price) === '0'
                ? '나눔'
                : `${formatPriceWithComma(price)}원`}
            </GoodsPriceText>
            <GoodsBottomButtonWrap>
              {isOwner ? (
                <>
                  <GoodsBottomButton
                    $isNavy={true}
                    onClick={handleClickDeleteButton}
                  >
                    삭제하기
                  </GoodsBottomButton>
                  <GoodsBottomButton
                    $isNavy={true}
                    onClick={handleClickEditButton}
                  >
                    수정하기
                  </GoodsBottomButton>
                </>
              ) : isAble ? (
                <GoodsBottomButton
                  type='button'
                  $isNavy={true}
                  onClick={() => createGoodsChatroom()}
                >
                  대화 나누기
                </GoodsBottomButton>
              ) : (
                <GoodsBottomButton
                  $isNavy={false}
                  disabled={true}
                >
                  대화 나누기
                </GoodsBottomButton>
              )}
            </GoodsBottomButtonWrap>
          </GoodsBottomWrap>
        </GlobalFloatAside>

        <Alert
          {...ALERT_MESSAGE.DELETE_POST}
          ref={alertRef}
          handleAlertClick={handleDeleteGoodsPost}
        />
      </section>
    </GoodsDetailWrap>
  )
}

export default GoodsDetailPage
