import styled from 'styled-components'

export const QuestionSection = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 0.75em;

  & label:first-child {
    display: block;

    color: ${({ theme }) => theme.fontColor.navy};
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
  }

  & input {
    margin-top: 0 !important;
    border: none !important;
    outline: 1px solid ${({ theme }) => theme.fontColor.cwhite};
  }

  & input:focus {
    outline: 1px solid ${({ theme }) => theme.fontColor.navy};
  }
`

export const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;

  background-color: ${({ theme }) => theme.fontColor.cwhite};
  color: ${({ theme }) => theme.fontColor.navy};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.large};

  border-radius: 0.25em;
`
