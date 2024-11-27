import styled from 'styled-components'
import { theme } from '@styles/theme'

export const RankingContainer = styled.div`
  width: 100%;
  padding: 20px;

  h3 {
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.semi};
    margin-bottom: 4px;
    color: ${theme.fontColor.black};
  }
`

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${theme.fontColor.black};
  font-size: ${theme.fontSize.medium};
  font-weight: ${theme.fontWeight.semi};
  text-align: center;

  thead {
    color: #d9d9d9;
    border-top: 1px solid ${theme.fontColor.cwhite};
    border-bottom: 1px solid ${theme.fontColor.cwhite};

    /* 순위와 팀 열 숨김 */
    th:first-child,
    th:nth-child(2) {
      visibility: hidden;
    }
  }

  tr {
    height: 40px;
  }

  th,
  td {
    vertical-align: middle; /* 세로 가운데 정렬 */
  }

  td {
    border-bottom: 1px solid ${theme.fontColor.cwhite};
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.medium};
  }

  .team {
    text-align: left;
  }

  tbody {
    tr:first-child {
      color: #4181dd;
    }

    tr:hover {
      background-color: ${theme.fontColor.cwhite}; /* 행 호버 시 배경 변경 */
    }
  }
`

export const TeamCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 왼쪽 정렬 */
  text-align: center;
  gap: 8px;
`

export const TeamLogo = styled.div`
  width: 30px;
  height: 30px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const TeamName = styled.span``
