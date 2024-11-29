import styled from 'styled-components'

export const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  height: 100%;
  padding: 20px 0;
`

export const SubmitTitle = styled.h2`
  font-size: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.semi};
  padding: 0 20px;
`

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px - 29px);
  gap: 30px;

  /* 하단 버튼 영역 때문에 가려서 하단 패딩 삽입 */
  padding-bottom: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
