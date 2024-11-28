import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 1em 1.25em;
  /* border-bottom: 1px solid ${({ theme }) => theme.fontColor.cwhite}; */
`
export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  gap: 0.5em;
  margin-top: 1em;
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
