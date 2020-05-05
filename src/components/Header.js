import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  margin: ${({ theme }) => `${theme.space[4]}px ${theme.space[3]}px`};

  ${({ theme }) => theme.mediaQueries.large} {
    margin: ${({ theme }) => `${theme.space[5]}px ${theme.space[6]}px`};
  }
`

const Logo = styled.div`
  align-items: center;
  display: flex;
`

const StyledImg = styled(Img)`
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.space[2]}px;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      chandler: file(relativePath: { eq: "chandler.png" }) {
        childImageSharp {
          fixed(width: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <HeaderContainer>
      <h4 style={{ margin: 0 }}>
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
            backgroundImage: 'none',
          }}
          to={'/'}
        >
          <Logo>
            <StyledImg fixed={data.chandler.childImageSharp.fixed} /> Chandler Moisen
          </Logo>
        </Link>
      </h4>
    </HeaderContainer>
  )
}

export default Header
