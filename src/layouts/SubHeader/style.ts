import styled from 'styled-components'

export const SubHeaderBox = styled.header`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.fontColor.white};
  padding: 0 20px;

  border-bottom: 1px solid ${({ theme }) => theme.border};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;

  z-index: 98;
`
export const SubHeaderLeft = styled.div`
  width: 24px;
  cursor: pointer;
`

export const SubHeaderText = styled.p`
  min-width: 20px;
  width: auto;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.black};
  letter-spacing: -0.025em;
`

export const SubHeaderRight = styled.div`
  width: 28px;
  & svg {
    float: right;
  }
`
export const SubHeaderComplete = styled.span`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.fontColor.black};
`

export const SubHeaderMessageText = styled.span`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.fontColor.black};
`
