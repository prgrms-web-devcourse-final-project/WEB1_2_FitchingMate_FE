import styled from 'styled-components'
import { theme } from '@styles/theme'

export const MoreSection = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${theme.fontColor.cwhite};
`
export const MateCardContainer = styled.div`
  h3 {
    padding: 1em 1.25em;
  }

  .more {
    padding: 1em 1.25em;
    font-size: ${theme.fontSize.large};
    font-weight: ${theme.fontWeight.regular};
    text-align: center;
    cursor: pointer;
    color: ${theme.fontColor.black};
    
  }

  .no-mate {
    padding: 1em 1.25em;
    text-align: center;
  }
`
