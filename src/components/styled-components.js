import styled from 'styled-components'

export const PageHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  margin-top: 0;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.medium} {
    font-size: ${({ theme }) => theme.fontSizes[8]}px;
  }

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

export const PageParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`
