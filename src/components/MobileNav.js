import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MobileNavContainer = styled.div`
  align-items: center;
  background: black;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
`

const StyledLink = styled(Link)`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  margin-bottom: ${({ theme }) => theme.space[6]}px;
  text-transform: uppercase;
`

const MobileNav = () => (
  <MobileNavContainer>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/">About</StyledLink>
    <StyledLink to="/writing">Writing</StyledLink>
  </MobileNavContainer>
)

export default MobileNav
