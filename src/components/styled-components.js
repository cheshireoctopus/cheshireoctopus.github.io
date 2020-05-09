import styled from 'styled-components'

export const PageHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
  margin-top: 0;

  ${({ theme }) => theme.mediaQueries.large} {
    font-size: ${({ theme }) => theme.fontSizes[9]}px;
  }
`
