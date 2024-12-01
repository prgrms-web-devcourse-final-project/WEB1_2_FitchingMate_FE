import styled from 'styled-components'

export const SelectOptionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const TopOption = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background: #d9d9d9;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  color: ${({ theme }) => theme.fontColor.cwhite};
`

export const SelectOption = styled(TopOption)<{ $teamColor: string }>`
  width: 48%;
  background: ${({ $teamColor }) => $teamColor};
`
