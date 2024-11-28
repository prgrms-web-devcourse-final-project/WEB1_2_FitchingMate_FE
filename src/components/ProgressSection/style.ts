import styled from 'styled-components'

export const ProcessSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`

export const ProcessBar = styled.div<{
  $isActive?: boolean
  $totalLength: number
}>`
  height: 4px;
  width: ${({ $totalLength }) => `${95 / $totalLength}%`};

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.fontColor.navy : theme.fontColor.cwhite};
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25em;
  padding: 0 20px;
`

export const Button = styled.button<{ $isPrevious?: boolean }>`
  width: ${({ $isPrevious }) => ($isPrevious ? '65%' : '100%')};
  padding: 1.25em 0;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: ${({ theme }) => theme.fontWeight.semi};

  background-color: ${({ theme }) => theme.fontColor.navy};
  color: ${({ theme }) => theme.fontColor.cwhite};
`
export const PreviousButton = styled(Button)`
  width: 30%;
  background-color: ${({ theme }) => theme.fontColor.cwhite};
  color: ${({ theme }) => theme.fontColor.navy};
`
