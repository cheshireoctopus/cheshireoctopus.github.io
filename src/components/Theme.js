import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  a {
    background-image: none;
    text-decoration: none;
    text-shadow: none;
  }
`

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 56, 64, 72, 96]
const space = [0, 4, 8, 16, 24, 32, 64, 72, 128, 256, 512]
const breakpoints = ['425px', '769px', '1024px']

const theme = {
  colors: {
    red: '#950451'
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  breakpoints,
  fontSizes,
  space,
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
