import React from 'react'
import styled from 'styled-components'

import { Footer, Header, Theme } from '.'

const Border = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.red};
  border-top: none;
`

const Container = styled.main`
  margin: 83px auto 0;
  max-width: 780px;
  padding: 44px 12px;

  ${({ theme }) => theme.mediaQueries.medium} {
    margin: 112px auto 0;
    padding: 44px 0;
  }

  ${({ theme }) => theme.mediaQueries.large} {
    margin: 112px auto 0;
  }
`

const Layout = ({ children }) => (
  <Theme>
    <Header />

    <Border>
      <Container>{children}</Container>

      <Footer />
    </Border>
  </Theme>
)

export default Layout
