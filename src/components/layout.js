import React from 'react'

import { Footer, Header, Theme } from '.'
import { rhythm } from '../utils/typography'

const Layout = ({ children }) => (
  <Theme>
    <Header />

    <div
      style={{
        margin: 'auto',
        maxWidth: rhythm(26),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <main>{children}</main>
    </div>

    <Footer />
  </Theme>
)

export default Layout
