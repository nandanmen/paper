import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 100%;
  }

  body {
    font-size: inherit;
    font-family: ${theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.black};
    line-height: 1.5;
    @supports (font-variation-settings: normal) {
      font-family: ${theme.fonts.var};
    }
  }

  code {
    font-size: ${theme.fontSizes[0]}px;
    font-family: ${theme.fonts.mono};
  }
`
