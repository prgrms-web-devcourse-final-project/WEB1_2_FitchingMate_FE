import styled from 'styled-components'
import { theme } from '@styles/theme'

export const ResultListTitle = styled.h3`
  font-size: 20px;
  font-weight: ${theme.fontWeight.medium};
  margin-bottom: 20px;
  color: ${theme.fontColor.black};
  `

export const ResultListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${theme.fontColor.black};
  margin-bottom: 20px;

  thead {
    display: none;
  }

  tbody {
    border-top: 1px solid ${theme.fontColor.cwhite};
  }

  th,
  td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid ${theme.fontColor.cwhite};
  }


  tr:hover {
    background-color: ${theme.fontColor.cwhite};
  }

  .date {
    text-align: left;
  }

  .vs {
    width: 100px;
  }

  .team-name {
    font-weight: ${theme.fontWeight.medium};
  }

  .result {
    font-weight: ${theme.fontWeight.bold};
  }

  .win {
    color: #00c073;
  }

  .loss {
    color: #e7252e;
  }

  .draw {
    color: ${theme.fontColor.black};
  }
`;

export const RivalTeam = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .team-logo {
    width: 30px;
    height: 30px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;
