import styled from 'styled-components'

export const ImageCardContainer = styled.div`
  flex-shrink: 0;
  margin-top: 3px; //이미지 삭제 버튼 때문에 위치 조정했는데 논의 필요해보임

  position: relative;

  width: 80px;
  height: 80px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  & button {
    width: 20px;
    height: 20px;
    border-radius: 50%;

    position: absolute;
    top: -3px;
    right: -6px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semi};
    background-color: ${({ theme }) => theme.fontColor.navy};
    color: ${({ theme }) => theme.fontColor.cwhite};
  }
`
