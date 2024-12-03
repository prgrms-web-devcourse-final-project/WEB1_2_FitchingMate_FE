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
import { useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
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

const GoodsDetailPage = () => {
  const [isOwner, setIsOwner] = useState(false)
  const [isAble, setIsAble] = useState(true)

  const { id: goodsId } = useParams()

  // 굿즈 게시글 상세 조회
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY.GOODS_POST, goodsId],
    queryFn: () => goodsService.getGoodsDetail(goodsId as string),
    enabled: !!goodsId,
  })

  // 굿즈 게시글 삭제 요청
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
   * 체크완료 추후 수정 필요
   */

  const { mutate: createGoodsChatroom } = useMutation({
    mutationFn: () => goodsChatService.createGoodsChatroom(2, 30),
    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  // 굿즈 게시글 수정 폼 데이터 관리
  const { setGoods, setImageList } = useGoodsFormStore()

  // 경로 관리
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const { alertRef, handleAlertClick } = useModal()

  if (!data) return null

  // 굿즈 게시글 삭제 버튼 클릭 이벤트 = > 알럿 오픈
  const handleClickDeleteButton = () => {
    handleAlertClick()
  }

  // 알럿에서 굿즈 게시글 삭제 처리
  const handleDeleteGoodsPost = () => {
    deleteGoodsPost({
      memberId: data.seller.memberId,
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
      state: { isEdit: true },
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
    <>
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
              <Map
                center={{
                  lat: Number(location.latitude),
                  lng: Number(location.longitude),
                }}
                style={{ width: '100%', height: '115px' }}
              >
                <MapMarker
                  position={{
                    lat: Number(location.latitude),
                    lng: Number(location.longitude),
                  }}
                />
              </Map>
            </GoodsDetailMapInner>{' '}
            {data.status === '거래중' ? (
              <CardBedge text='거래중' />
            ) : (
              <CardBedge text='거래완료' />
            )}
          </GoodsDetailMapWrap>
        </GoodsNoticeWrap>

        <GlobalFloatAside>
          <GoodsBottomWrap>
            <GoodsPriceText>{formatPriceWithComma(price)}원</GoodsPriceText>
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
    </>
  )
}

export default GoodsDetailPage
