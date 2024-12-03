import styled from "styled-components";
import { theme } from "@styles/theme";

export const MateDetailActionContainer = styled.div`
  
  margin-top: 1em;
`;

export const Notice = styled.div`
  color: #e00000;
  font-weight: ${theme.fontWeight.semi};
  font-size: ${theme.fontSize.medium};
  margin-left: 1.25em;
  margin-bottom: 1em;
`;

export const ActionSection = styled.div`
  display: flex;
  min-height: 4.5em;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.25em;
  background-color: ${theme.fontColor.cwhite};
`;

export const ChattingPeople = styled.div`
  color: #727272;
  font-size: ${theme.fontSize.large};
  font-weight: ${theme.fontWeight.semi};
`;

export const ActionButton = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 0.5em 1em;
    font-size: ${theme.fontSize.large};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${theme.teams.kbo};
    color: ${theme.fontColor.white};

    &:disabled {
      background-color: #d9d9d9;
      color: #727272;
      cursor: not-allowed;
    }
  }
`;


