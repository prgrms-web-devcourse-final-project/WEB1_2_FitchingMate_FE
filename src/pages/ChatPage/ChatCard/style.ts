import styled from 'styled-components'

export const Card = styled.div`
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-shrink: 0;
`
export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media all and (max-width: 431px) {
    gap: 20px;
  }
`

export const ProfileWrap = styled.div`
  position: relative;

  img {
    width: 40px;
    height: 40px;

    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.fontColor.black};

    position: absolute;
    bottom: -12px;
    right: -12px;

    @media all and (max-width: 431px) {
      width: 32px;
      height: 32px;
      bottom: -8px;
      right: -8px;
      object-fit: cover;
      object-position: center;
    }
  }
`

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625em;
`

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125em;

  h2 {
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media all and (max-width: 431px) {
      max-width: 180px;
    }
  }

  p {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: ${({ theme }) => theme.fontSize.small};
    color: #7d7d7d;
  }

  p:last-child {
    max-width: 160px;
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`

export const ExitButton = styled.button`
  background-color: transparent;
`
