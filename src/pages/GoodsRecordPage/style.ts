import { theme } from '@styles/theme'
import styled from 'styled-components'

export const GoodsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1em;
  padding: 20px;
`

export const GoodsRecordBoxContainer = styled.div`
  width: 100%;

  & > a {
    display: block;
    width: 100%;
  }
`

export const GoodsRecordBoxWrap = styled.div`
  padding: 1em;
  border: 1px solid #eee;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 20px;
`

export const GoodsImageWrap = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;

  @media all and (max-width: 431px) {
    width: 70px;
    height: 70px;
  }

  & > img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1) !important;
  }
`

export const GoodsRecordTextWrap = styled.div`
  width: calc(100% - (100px + 20px));
`

export const GoodsRecordTitle = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;

  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.fontColor.black};
`

export const GoodsRecordPrice = styled.p`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.black};
  margin-top: 0.375em;
`

export const GoodsInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 5px;
  margin-top: 0.5em;

  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.fontColor.black};
`

export const NoGoodsList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.black};
`
