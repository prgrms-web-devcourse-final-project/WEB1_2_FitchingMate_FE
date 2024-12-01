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

const GoodsDetailPage = () => {
  const [isOner, setIsOner] = useState(false)
  const [isAble, setIsAble] = useState(false)

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
              <CardBedge text='모자' />
              <CardBedge text='NC' />
            </div>
            <div>
              {isAble ? (
                <CardBedge text='거래중' />
              ) : (
                <CardBedge text='거래완료' />
              )}
            </div>
          </GoodsBedgeWrap>
          <p>NC 다이노스 배틀크러쉬 모자</p>
          <UserInfoList />
        </GoodsDetailTop>

        <GoodsNoticeWrap>
          <GoodsDetailText>
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
            여기 내용이 들어갑니다 <br />
          </GoodsDetailText>
          <GoodsDetailMapWrap>
            <h2>거래 장소</h2>
            <p>초등학교 앞</p>
            <GoodsDetailMapInner>
              <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: '100%', height: '115px' }}
              >
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }} />
              </Map>
            </GoodsDetailMapInner>
          </GoodsDetailMapWrap>
        </GoodsNoticeWrap>

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
