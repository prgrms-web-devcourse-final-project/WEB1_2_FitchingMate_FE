import styled from 'styled-components'
import { theme } from '@styles/theme'
import { kboTeamInfo } from '@utils/kboInfo'

interface ResultSummaryContainerProps {
  teamKey: string // 팀 이름 키
}

export const ResultSummaryContainer = styled.div<ResultSummaryContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${({ teamKey }) =>
    kboTeamInfo[teamKey]?.color ||
    '#004aad'}; /* 팀 색상 적용 (기본값: 파란색) */
  padding: 8px 20px;
  color: ${theme.fontColor.white};
`

export const TeamInfo = styled.div`
  display: flex;
  align-items: center;

  .logo {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  .team-name {
    font-size: ${theme.fontSize.small};
    font-weight: ${theme.fontWeight.regular};
  }
`

export const GameStats = styled.div`
  text-align: right;
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.regular};

  .win-draw-loss {
    margin-top: 5px;
  }
`
