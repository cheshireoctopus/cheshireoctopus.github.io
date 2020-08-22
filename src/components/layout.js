import React from 'react'

import Theme from './Theme'
import Header from './Header'
import Footer from './Footer'
import { rhythm } from '../utils/typography'

const Layout = ({ children }) => (
  <Theme>
    <Header />

    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
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
