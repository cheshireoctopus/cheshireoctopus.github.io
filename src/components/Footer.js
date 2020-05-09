import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  margin: ${({ theme }) => `${theme.space[4]}px ${theme.space[3]}px`};

  ${({ theme }) => theme.mediaQueries.large} {
    margin: ${({ theme }) => `${theme.space[5]}px ${theme.space[6]}px`};
  }
`

const Footer = () => (
  <FooterContainer>
    <div>
      <b>© 2013 - {new Date().getFullYear()}</b>
      <div>
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>
  </FooterContainer>
)

export default Footer
