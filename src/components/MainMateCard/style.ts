import { content } from './../../pages/GoodsListPage/mockData'
import styled, { css } from 'styled-components'

export const CardContainer = styled.div<{ $isDetailPage?: boolean }>`
  width: 100%;
  padding: 1em 1.25em;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor.cwhite};

  cursor: pointer;

  ${({ $isDetailPage }) =>
    $isDetailPage &&
    css`
      cursor: default;
      border-bottom: none;
    `}

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

export const CardImageWrap = styled.div`
  float: left;
  width: 25%;
  border-radius: 4px;
  position: relative;

  @media all and (max-width: 431px) {
    width: 100px;
    height: 100px;
  }

  & > img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media all and (max-width: 431px) {
      transform: scale(1) !important;
    }
  }

  & > div {
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
    position: absolute;
    top: 0;
    left: 0;

    @media all and (max-width: 431px) {
      content: none;
    }
  }
`

export const CardContent = styled.div<{ $isDetailPage?: boolean }>`
  float: left;
  width: calc(75% - 1.25em);
  margin-left: 1.25em;
  display: flex;
  justify-content: space-between;

  ${({ $isDetailPage }) =>
    $isDetailPage &&
    css`
      width: 100%;
    `}

  @media all and (max-width:431px) {
    width: calc(100% - (100px + 1.25em));
  }
`
export const CardContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 2px 0;

  & p {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  & p:first-child {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 4px;

    @media all and (max-width: 431px) {
      margin-bottom: 0;
    }
  }
`

export const InListDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 2px 0;

  & p {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  & p:first-child {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 4px;

    @media all and (max-width: 431px) {
      margin-bottom: 0;
    }
  }
`

export const BedgeContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 0.5em;
`
export const CardContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;

  & p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
  }
`
