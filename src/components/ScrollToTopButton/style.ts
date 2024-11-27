import styled from 'styled-components'
import { theme } from '@styles/theme'

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 80px; 
  left: 40px; 
  width: 50px;
  height: 50px;
  background-color: ${theme.fontColor.white}91;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: ${theme.fontColor.white};
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #002561; /* 화살표 색상 (팀 컬러 적용 가능) */
    opacity: 0.57;
  }

  &:hover svg {
    opacity: 1;
  }
`;
