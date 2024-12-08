import { styled } from 'styled-components'

export const ProfileWrap = styled.div`
  width: 3.125em;
  height: 3.125em;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border: 3px solid ${({ theme }) => theme.fontColor.black};
    border-radius: 10px;
  }
`
