import styled from 'styled-components'

export const UserListCardContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.fontColor.black};

  & span {
    color: #7d7d7d;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const ExcludeButton = styled.button`
  width: 34px;
  height: 34px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.fontColor.cwhite};
  color: ${({ theme }) => theme.fontColor.navy};
`
