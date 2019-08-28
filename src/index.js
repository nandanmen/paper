import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render } from 'react-dom'

import { App } from './App'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById('root')
)
