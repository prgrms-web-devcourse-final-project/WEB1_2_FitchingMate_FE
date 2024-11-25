import styled from 'styled-components'
import { theme } from '@styles/theme'

interface ProfilePadding {
  paddingTop: number
}

export const ProfilePadding = styled.div<ProfilePadding>`
  padding: ${({ paddingTop }) => paddingTop}em 20px;
`

export const ProfileTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const ProfileEditWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0 20px;
  flex: 2;
`

export const ProfileUserNickname = styled.p`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.black};
`

export const ProfileFollowWrap = styled.div`
  width: calc(100% - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.semi};
  color: ${theme.fontColor.black};

  & > div {
    width: 35%;
  }
`

export const ProfileNotice = styled.div`
  padding: 0 20px;

  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.regular};
  color: ${theme.fontColor.black};

  & > p {
    word-break: keep-all;
  }
`

export const ProfileButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 10px;
`

export const ProfileManner = styled.div``

export const ProfileMannerTitle = styled.p`
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.black};
  text-decoration: underline;
`

export const ProfileMannerInfo = styled.div`
  position: relative;
  & > span {
    position: absolute;
    top: 5px;
    left: 30%;
    transform: translateX(-50%);
    display: block;
    width: fit-content;
    font-size: ${theme.fontSize.small};
    font-weight: ${theme.fontWeight.regular};
    color: #7d7d7d;
    &::after {
      content: '';
      margin: 0 auto;
      display: block;
      width: 0;
      height: 0;
      border-bottom: 4px solid transparent;
      border-top: 4px solid #7d7d7d;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
    }
  }

  & > p {
    text-align: right;
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.fontColor.navy};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
  }
`

export const ProfileMannerGraph = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 9999px;
  background-color: ${theme.fontColor.cwhite};
  position: relative;
  overflow: hidden;

  & > div {
    width: 30%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${theme.fontColor.navy};
  }
`

export const ProfileMannerNotice = styled.div`
  padding: 1.5625em 20px;
  background-color: ${theme.fontColor.cwhite};

  & > h2 {
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.fontColor.black};
  }

  & > p {
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.regular};
    color: ${theme.fontColor.black};
    margin-top: 1em;
  }
`

export const ProfileLinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0.75em;

  & > a {
    width: 100%;
    padding: 0.75em 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      font-size: ${theme.fontSize.large};
      font-weight: ${theme.fontWeight.semi};
      color: ${theme.fontColor.black};
    }
  }
`

// 프로필 수정 페이지

export const ProfileImageEditWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`

export const ProfileImageEdit = styled.label`
  width: 100px;
  height: 100px;
  position: relative;
  cursor: pointer;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  & > div {
    width: 30%;
    height: 30%;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${theme.fontColor.cwhite};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ProfileEditInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 20px;

  & > label {
    margin-bottom: 0.5em;
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.fontWeight.semi};
    color: ${theme.fontColor.black};
  }

  & > textarea {
    appearance: none;
    resize: none;
    border: 1px solid ${theme.fontColor.cwhite};
    background-color: ${theme.fontColor.cwhite};
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.regular};
    padding: 1em;
    border-radius: 5px;
    min-height: 90px;

    &:focus {
      border: 1px solid ${theme.fontColor.navy};
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: ${theme.fontColor.cwhite};
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.medium};
    color: ${theme.fontColor.black};
    border-radius: 4px;
    cursor: pointer;
  }
`
