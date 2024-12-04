import styled, { css } from 'styled-components'

export const CardContainer = styled.div<{ $isDetailPage?: boolean }>`
  display: flex;

  width: 100%;
  gap: 1em;
  padding: 1em 1.25em;
  border-bottom: 1px solid ${({ theme }) => theme.fontColor.cwhite};

  cursor: pointer;

  ${({ $isDetailPage }) =>
    $isDetailPage &&
    css`
      cursor: default;
      border-bottom: none;
    `}
`

export const CardImageWrap = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 4px;

  @media all and (max-width: 431px) {
    width: 80px;
    height: 80px;
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
`

export const CardContent = styled.div<{ $isDetailPage?: boolean }>`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 100px);

  ${({ $isDetailPage }) =>
    $isDetailPage &&
    css`
      width: 100%;
    `}
`
export const CardContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
export const BedgeContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 0.6em;
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
