import styled from 'styled-components'

export const PageHeading = styled.h1`
  margin-top: 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 -2em;
    margin-bottom: ${({ theme }) => theme.space[5]}px;
    font-size: ${({ theme }) => theme.fontSizes[10]}px;
  }
`

export const BlogPostDate = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
    margin-bottom: ${({ theme }) => theme.space[7]}px;
  }
`
