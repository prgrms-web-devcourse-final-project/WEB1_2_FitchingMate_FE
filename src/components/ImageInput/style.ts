import styled from 'styled-components'

export const ImgLabel = styled.label<{ $disabled: boolean }>`
  width: 80px;
  height: 80px;
  margin-top: 3px; //이미지 삭제 버튼 때문에 위치 조정했는데 논의 필요해보임

  position: relative;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  background-color: ${({ theme }) => theme.fontColor.cwhite};
  border: 1px solid ${({ theme }) => theme.fontColor.navy};

  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;

    font-size: ${({ theme }) => theme.fontSize.small};
  }

  input[type='file'] {
    display: none;
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`
