import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 10px;

  & > p {
    display: flex;
    align-items: center;
    gap: 5px;

    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-weight: ${({ theme }) => theme.fontWeight.medium};
`

export const ProfileManner = styled.span`
  color: ${({ theme }) => theme.fontColor.navy};
`
