import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px 20px;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 10px;

    & > img {
      width: 55px;
      height: 55px;
      border-radius: 5px;
    }
  }

  & > button {
    margin-top: 6px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: transparent;

    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
    border: 1px solid ${({ theme }) => theme.fontColor.black};
  }

  border-bottom: 1px solid ${({ theme }) => theme.fontColor.cwhite};
`

export const GoodsListCardContainer = styled.div`
  width: 100%;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const BedgeContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 8px;
  }
`

export const GoodsInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
  }
`
