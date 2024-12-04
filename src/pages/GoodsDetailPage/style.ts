import { theme } from '@styles/theme'
import styled from 'styled-components'

interface ButtonPropTypes {
  $isNavy: boolean
}

export const GoodsDetailWrap = styled.section`
  padding: 0 0 75px;

  @media all and (max-width: 431px) {
    padding: 0 0 65px;
  }
`

export const SwiperContainer = styled.div`
  position: relative;
`

export const SwiperSlideInner = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    padding-bottom: 93.75%;
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 16px !important;
  left: 50% !important;
  transform: translateX(-50%);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: #333741; /* 기본 색상 */
    opacity: 1;
    margin: 0 5px;
  }
  .swiper-pagination-bullet-active {
    background: #cecfd2; /* 활성화된 색상 */
  }
`

export const GoodsDetailTop = styled.div`
  padding: 0.625em 20px;
  border-bottom: 1px solid #cacaca;

  & > p {
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.fontColor.black};
    margin: 0.9375em 0;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const GoodsBedgeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5em;
  }
`

export const GoodsBottomWrap = styled.div`
  width: 100%;
  padding: 1.25em 20px;
  background-color: ${theme.fontColor.cwhite};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const GoodsPriceText = styled.p`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.black};
  letter-spacing: -0.025em;
`

export const GoodsBottomButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
`

export const GoodsBottomButton = styled.button<ButtonPropTypes>`
  appearance: none;
  padding: 0.5em 1em;

  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.white};
  background-color: ${({ $isNavy }) =>
    $isNavy ? `${theme.fontColor.navy}` : `#D9D9D9`};
  letter-spacing: -0.025em;

  border-radius: 4px;
`

export const GoodsNoticeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2.1875em 20px;
  gap: 2.1875em;
`

export const GoodsDetailText = styled.div`
  width: 100%;
  min-height: 190px;
  overflow-y: scroll;
  padding: 1em;
  background-color: ${theme.fontColor.cwhite};
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.fontColor.black};
  border-radius: 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const GoodsDetailMapWrap = styled.div`
  width: 100%;
  & > h2 {
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.fontWeight.semi};
    color: ${theme.fontColor.black};
  }

  & > p {
    width: 100%;
    padding: 1em;
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.fontColor.black};
    background-color: ${theme.fontColor.cwhite};
    margin-top: 0.5em;
    border-radius: 4px;
  }
`

export const GoodsDetailMapInner = styled.div``
