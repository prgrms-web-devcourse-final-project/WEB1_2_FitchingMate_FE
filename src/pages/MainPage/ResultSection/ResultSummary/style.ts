import styled from 'styled-components'
import { theme } from '@styles/theme'
import { kboTeamInfo,kboTeamList } from '@constants/kboInfo'

interface ResultSummaryContainerProps {
  $teamId: number // 팀 이름 키
}

export const ResultSummaryContainer = styled.div<ResultSummaryContainerProps>`
  min-height: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${({ $teamId }) =>
    kboTeamList[$teamId]?.color ||
    theme.fontColor.navy};
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

  .team-name, .rank {
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
export const teamLogo = styled.img`

`