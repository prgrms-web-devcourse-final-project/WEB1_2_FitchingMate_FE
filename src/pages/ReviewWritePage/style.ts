import { theme } from '@styles/theme'
import styled from 'styled-components'

export const ReviewWriteWrap = styled.form`
  padding: 20px 20px 60px;
  height: calc(100vh - (48px + 60px));
  position: relative;

  @media all and (max-width: 431px) {
    padding: 1.25em 20px 0;
  }
`

export const ReviewPostWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 10px;
`

export const ReviewPostImage = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 5px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const ReviewPostInfoWrap = styled.div`
  width: calc(100% - (55px + 10px));
`

export const ReviewPostTitle = styled.p`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.black};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ReviewPostText = styled.p`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.fontColor.black};
  margin-top: 0.3125em;

  & > span {
    font-weight: ${theme.fontWeight.semi};
  }
`

export const ReviewRatingWrap = styled.div`
  margin-top: 1.875em;

  & > p {
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.fontWeight.semi};
    color: ${theme.fontColor.black};
  }

  & > span {
    display: block;
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.regular};
    color: #7d7d7d;
    margin-top: 0.9375em;
  }
`

export const ReviewSelectRating = styled.div`
  margin-top: 1.875em;
  & > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;

    @media all and (max-width: 431px) {
      padding: 0;
    }
  }
`

export const ReviewSelectLabel = styled.label`
  cursor: pointer;
  &.active img {
    filter: grayscale(0) !important;
  }

  & > div {
    width: 100px;
    height: 100px;
    padding: 5px;
    background-color: ${theme.fontColor.cwhite};
    border: 1px solid #acacac;
    border-radius: 35px;

    @media all and (max-width: 431px) {
      width: 75px;
      height: 75px;
      border-radius: 25px;
    }

    & > img {
      width: 100%;
      height: 100%;
      filter: grayscale(1);
    }
  }

  & > p {
    display: block;
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.semi};
    color: #7d7d7d;
    margin-top: 0.9375em;
    text-align: center;

    @media all and (max-width: 431px) {
      margin-top: 0.75em;
    }
  }
`

export const ReviewTextareaWrap = styled.div`
  margin-top: 1.875em;

  & > p {
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.fontWeight.semi};
    color: ${theme.fontColor.black};
  }

  & > span {
    display: block;
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.regular};
    color: #7d7d7d;
    margin-top: 0.9375em;
  }

  & > textarea {
    appearance: none;
    border: none;
    width: 100%;
    min-height: 150px;
    background-color: ${theme.fontColor.cwhite};
    border-radius: 4px;
    padding: 1em;

    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.fontColor.black};

    margin-top: 1.875em;
  }

  & > textarea::placeholder {
    color: ${`${theme.fontColor.black}50`};
  }
`

export const ReviewSendButtonWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  padding: 0 20px 20px;
`
