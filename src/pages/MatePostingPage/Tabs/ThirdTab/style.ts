import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Input = styled.input`
  border: none;
  outline: 1px solid ${({ theme }) => theme.fontColor.cwhite};

  &:focus {
    border: none;
    outline: 1px solid ${({ theme }) => theme.fontColor.navy};
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  border: none;

  font-weight: ${({ theme }) => theme.fontWeight.regular};
  outline: 1px solid ${({ theme }) => theme.fontColor.cwhite};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.fontColor.navy};
  }
`

export const ImageConainer = styled.div`
  display: flex;
  gap: 20px;
`
