import styled from 'styled-components'

export const ChatPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 1.25em 20px 0 20px;
`

export const TabContainer = styled.div`
  display: flex;
  gap: 10px;
`
export const ChatListContainer = styled.div`
  padding-bottom: 1.25em;

  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: calc(100vh - 170px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`
