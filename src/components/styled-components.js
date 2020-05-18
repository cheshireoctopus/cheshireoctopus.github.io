import styled from 'styled-components'

export const PageHeading = styled.h1`
  text-align: center;

  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 -2em;
    margin-bottom: ${({ theme }) => theme.space[5]}px;
    margin-top: ${({ theme }) => theme.space[6]}px;
    font-size: ${({ theme }) => theme.fontSizes[10]}px;
  }
`
