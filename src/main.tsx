import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { GlobalStyle } from '@styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'
import queryClient from '@apis/queryClient'
import App from './App'
import { SkeletonTheme } from 'react-loading-skeleton'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SkeletonTheme
          baseColor='#313131'
          highlightColor='#525252'
        >
          <GlobalStyle />
          <App />
        </SkeletonTheme>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
