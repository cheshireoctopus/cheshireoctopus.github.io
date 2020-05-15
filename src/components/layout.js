import React from 'react'
import { Link } from 'gatsby'

import Theme from './Theme'
import Header from './Header'
import Footer from './Footer'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  renderHeaderContent() {
    const { location, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    if (location.pathname === rootPath) {
      return (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              backgroundImage: 'none',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    }

    return (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
            backgroundImage: 'none',
          }}
          to={'/'}
        >
          Home
        </Link>
      </h3>
    )
  }

  render() {
    const { children } = this.props

    return (
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
  }
}

export default Layout
