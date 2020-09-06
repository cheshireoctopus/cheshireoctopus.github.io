import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
    font-family: 'Yeseva One', serif;
  }

  a {
    background-image: none;
    text-decoration: none;
    text-shadow: none;

    &.gatsby-resp-image-link: {
      background-image: none;
    }

    &:hover {
      cursor: pointer;
    }
  }

  span {
    &.tag {
      border: 1px solid ${({ theme }) => theme.colors.red};
      border-radius: 2px;
      color: ${({ theme }) => theme.colors.red};
      font-size: 12px;
      letter-spacing: 0.5px;
      margin-right: 8px;
      padding: 3px 12px;
    }
  }

  h2 {
    &:not(pre) > code[class*="language-"] {
      background: none;
      color: #000000e6;
      font-size: inherit;
      padding: 0;
    }
  }

  :not(pre) > code[class*="language-"] {
    background: #000000e6;
    font-size: 14px;
    padding: .1em .3em;
  }

  div.gatsby-highlight {
    margin-bottom: 1.58em;

    pre {
      border-radius: 5px;
      margin: 0;
    }
  }

  li {
    margin-bottom: 6px;
  }

  twitter-widget {
    margin: auto;
  }
`

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 56, 64, 72, 96]
const space = [0, 4, 8, 16, 24, 32, 64, 72, 128, 256, 512]
const breakpoints = ['425px', '769px', '1024px', '1280px']

const theme = {
  colors: {
    red: '#950451',
    white: '#FFF',
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`,
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
