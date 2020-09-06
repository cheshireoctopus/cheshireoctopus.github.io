import React, { useEffect, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Hamburger from 'hamburger-react'

import { MobileNav } from '.'

const HeaderContainer = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.red};
  border-bottom: none;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.space[3]}px`};
  position: fixed;
  top: 0;
  width: calc(100%);

  ${({ theme }) => theme.mediaQueries.large} {
    padding: ${({ theme }) => `${theme.space[5]}px ${theme.space[6]}px`};
  }
`

const Logo = styled(Link)`
  align-items: center;
  display: flex;

  h4 {
    margin: 0;
  }
`

const StyledImg = styled(Img)`
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.space[2]}px;
`

const StyledLink = styled(Link)`
  background-image: none;
  margin-left: ${({ theme }) => theme.space[4]}px;
  padding: 0 4px 2px;
  text-shadow: none;
  text-transform: uppercase;

  &.active,
  &:hover {
    border-bottom: 2px solid #950451;
  }
`

const Nav = styled.nav`
  display: none;

  ${({ theme }) => theme.mediaQueries.large} {
    display: block;
  }
`

const MobileNavIcon = styled.nav`
  z-index: ${({ isShowingMenu }) => isShowingMenu && 1};

  ${({ theme }) => theme.mediaQueries.large} {
    display: none;
  }
`

const Header = () => {
  const [isShowingMenu, setIsShowingMenu] = useState(false)
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

  const handleOnClick = () => {
    setIsShowingMenu(isShowingMenu => {
      return !isShowingMenu
    })
  }

  useEffect(() => {
    if (isShowingMenu) {
      document.querySelector('body').style.overflow = 'hidden'
    } else {
      document.querySelector('body').style.overflow = ''
    }
  }, [isShowingMenu])

  return (
    <HeaderContainer>
      <Logo to={'/'}>
        <StyledImg fixed={data.chandler.childImageSharp.fixed} />
        <h4>Chandler Moisen</h4>
      </Logo>

      <Nav>
        <StyledLink activeClassName="active" to="/">
          Home
        </StyledLink>
        <StyledLink activeClassName="active" to="/writing">
          Writing
        </StyledLink>
        <StyledLink activeClassName="active" to="/notes">
          Notes
        </StyledLink>
        <StyledLink activeClassName="active" to="/activity">
          Activity
        </StyledLink>
      </Nav>

      <MobileNavIcon isShowingMenu={isShowingMenu}>
        <Hamburger
          color={isShowingMenu ? '#FFF' : '#000'}
          duration={0.55}
          label="Show menu"
          toggled={isShowingMenu}
          toggle={handleOnClick}
        />
      </MobileNavIcon>

      {isShowingMenu && <MobileNav />}
    </HeaderContainer>
  )
}

export default Header
