import styled from 'styled-components'
import { theme } from '@styles/theme'

export const ResultListTitle = styled.h3`
  margin-bottom: 1em;
  color: ${theme.fontColor.black};
  padding: 0 20px;
`

export const ErrorContainer = styled.div`
  padding: 20px;
  text-align: center;
`

export const ResultListTable = styled.table`
  width: 100%;
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
    padding-left: 1.25em;
    text-align: left;
    @media all and (max-width: 431px) {
      width: 15%;
    }
  }

  .vs {
    padding-right: 1em;
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

  .score {
    padding-right: 1.25em;
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
