import styled, { css } from 'styled-components'

export const GoodsChatInputContainer = styled.form<{
  $chatRoomStatus: string
  $postStatus: string
}>`
  width: 100%;
  padding: 0.9em 20px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 87%;
    border: none;
    outline: none;

    border-radius: 25px;
  }

  button {
    background-color: transparent;
  }

  ${({ $chatRoomStatus }) =>
    $chatRoomStatus === 'false' &&
    css`
      color: ${({ theme }) => theme.fontColor.black};
      background-color: ${({ theme }) => theme.fontColor.cwhite};

      p {
        padding-block: 0.9em;
      }
    `}

  ${({ $postStatus }) =>
    $postStatus === '거래완료' &&
    css`
      color: ${({ theme }) => theme.fontColor.black};
      background-color: ${({ theme }) => theme.fontColor.cwhite};

      p {
        padding-block: 0.9em;
      }
    `}
`
export const MateChatInputContainer = styled.form`
  width: 100%;
  padding: 0.9em 20px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 87%;
    border: none;
    outline: none;

    border-radius: 25px;
  }

  button {
    background-color: transparent;
  }
`
