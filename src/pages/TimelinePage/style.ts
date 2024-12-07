import { theme } from '@styles/theme'
import styled, { keyframes } from 'styled-components'

interface RotatePropTypes {
  className: string | null
}

interface BoxColor {
  $homeColor: string
  $awayColor: string
}

export const TimelineWrap = styled.section`
  padding: 20px;
`

export const TimelineBoxWrap = styled.div`
  padding-bottom: 2.5em;

  & > h2 {
    font-size: 1.125em;
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.fontColor.navy};
  }
`

export const TimelineColorBox = styled.div<BoxColor>`
  margin-top: 0.875em;
  padding: 1.25em 0 0;
  background: linear-gradient(
    -30deg,
    ${({ $homeColor }) => $homeColor},
    ${({ $awayColor }) => $awayColor}
  );
  border-radius: 8px;
`

export const TimelineBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TimelineRotate = styled.div<RotatePropTypes>`
  &.on {
    transform: rotate(180deg);
  }
`

export const TimelineBoxTopText = styled.div`
  color: ${theme.fontColor.white};
  padding: 0 20px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h3 {
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.fontWeight.semi};
    margin: 0.25em 0;
  }

  & > span {
    font-size: ${theme.fontSize.medium};
    font-weight: ${theme.fontWeight.regular};
  }
`

export const TimelineBottomBox = styled.div`
  background-color: ${theme.fontColor.black};
  padding-bottom: 20px;
  border-radius: 8px;

  & > h2 {
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.fontColor.white};
    padding: 0 20px;
  }
`

export const TimelineBottomImage = styled.img`
  width: 100%;
  margin-bottom: 0.875em;
`

export const TimelineReviewWrap = styled.div`
  margin-top: 0.625em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px 0;
`

export const TimelineReviewBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;

  & > div:first-child {
    width: calc(100% - 80px);
  }

  & img {
    width: 50px;
    height: 50px;
  }
`

export const TimelineReviewer = styled.p`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.white};
`

export const TimelineReviewInner = styled.p`
  font-size: ${theme.fontSize.medium};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.fontColor.white};
  margin-top: 0.375em;

  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const TimelineSendReview = styled.button`
  appearance: none;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 5px;
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.white};
`
