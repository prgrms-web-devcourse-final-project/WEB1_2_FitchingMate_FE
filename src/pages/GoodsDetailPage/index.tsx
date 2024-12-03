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
import { useParams } from 'react-router-dom'
import goodsService from '@apis/goodsService'
import { useQuery } from '@tanstack/react-query'

const GoodsDetailPage = () => {
  const [isOner, setIsOner] = useState(false)
  const [isAble, setIsAble] = useState(false)

  const { id: goodsId } = useParams()

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['goodsDetail', goodsId],
    queryFn: () => goodsService.getGoodsDetail(goodsId as string),
    enabled: !!goodsId,
  })

  return (
    <>
      <SubHeader
        left='back'
        center='굿즈 거래하기'
      />
      <section>
        {data && (
          <>
            <SwiperContainer>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ el: '.custom-pagination', clickable: true }}
                modules={[Pagination]}
              >
                <SwiperSlide>
                  <SwiperSlideInner>
                    <img
                      src='https://www.womansense.co.kr/upload/woman/article/201906/thumb/42093-370390-sampleM.jpg'
                      alt=''
                    />
                  </SwiperSlideInner>
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperSlideInner>
                    <img
                      src='https://www.womansense.co.kr/upload/woman/article/201906/thumb/42093-370390-sampleM.jpg'
                      alt=''
                    />
                  </SwiperSlideInner>
                </SwiperSlide>
                <SwiperSlide>
                  <SwiperSlideInner>
                    <img
                      src='https://www.womansense.co.kr/upload/woman/article/201906/thumb/42093-370390-sampleM.jpg'
                      alt=''
                    />
                  </SwiperSlideInner>
                </SwiperSlide>
              </Swiper>
              <PaginationContainer className='custom-pagination' />
            </SwiperContainer>
            <GoodsDetailTop>
              <GoodsBedgeWrap>
                <div>
                  <CardBedge text={data.category} />
                  <CardBedge text={data.teamName} />
                </div>
                <div>
                  <CardBedge text={data.status} />
                </div>
              </GoodsBedgeWrap>
              <p>{data.title}</p>
              <UserInfoList seller={data.seller} />
            </GoodsDetailTop>

            <GoodsNoticeWrap>
              <GoodsDetailText>{data.content}</GoodsDetailText>
              <GoodsDetailMapWrap>
                <h2>거래 장소</h2>
                <p>{data.location.placeName}</p>
                <GoodsDetailMapInner>
                  <Map
                    center={{
                      lat: Number(data.location.latitude),
                      lng: Number(data.location.longitude),
                    }}
                    style={{ width: '100%', height: '115px' }}
                  >
                    <MapMarker
                      position={{
                        lat: Number(data.location.latitude),
                        lng: Number(data.location.longitude),
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
          </>
        )}
        <GlobalFloatAside>
          <GoodsBottomWrap>
            <GoodsPriceText>00,000원</GoodsPriceText>
            <GoodsBottomButtonWrap>
              {isOner ? (
                <>
                  <GoodsBottomButton $isNavy={true}>삭제하기</GoodsBottomButton>
                  <GoodsBottomButton $isNavy={true}>수정하기</GoodsBottomButton>
                </>
              ) : isAble ? (
                <GoodsBottomButton $isNavy={true}>
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
      </section>
    </>
  )
}

export default GoodsDetailPage
