import styled from 'styled-components'
import { theme } from '@styles/theme'

export const ResultListTitle = styled.h3`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.fontWeight.medium};
  margin-bottom: 1.25em;
  color: ${theme.fontColor.black};
  padding: 0 20px;
`

export const ResultListTable = styled.table`
  width: calc(100% - 40px);
  margin: 0 auto;
  border-collapse: collapse;
  color: ${theme.fontColor.black};
  margin-bottom: 1.25em;

  thead {
    display: none;
  }

  tbody {
    border-top: 1px solid ${theme.fontColor.cwhite};
  }

  th,
  td {
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid ${theme.fontColor.cwhite};
  }

  tr:hover {
    background-color: ${theme.fontColor.cwhite};
  }

  .date {
    text-align: left;
    @media all and (max-width: 431px) {
      width: 15%;
    }
  }

  .vs {
    width: 100px;
    @media all and (max-width: 431px) {
      width: 15%;
    }
  }

  .rival-team {
    width: 40%;
  }

  .team-name {
    font-weight: ${theme.fontWeight.medium};
  }

  .result {
    font-weight: ${theme.fontWeight.bold};
    width: 15%;
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
`

export const RivalTeam = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .team-logo {
    width: 30px;
    height: 30px;

    @media all and (max-width: 431px) {
      width: 25px;
      height: 25px;
    }
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
`
