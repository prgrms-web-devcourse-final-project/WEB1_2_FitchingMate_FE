import styled from 'styled-components'

export const ChatInputContainer = styled.div`
  width: 100%;
  padding: 1.25em 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

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
