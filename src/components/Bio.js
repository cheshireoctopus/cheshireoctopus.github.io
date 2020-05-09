import React from 'react'

import { PageHeading } from './styled-components'
import TagsRotator from './TagsRotator'

import styled from 'styled-components'

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
  margin-top: 0;

  ${({ theme }) => theme.mediaQueries.large} {
    font-size: ${({ theme }) => theme.fontSizes[9]}px;
  }
`

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  margin-top: 0;
`

const Bio = ({ tags }) => (
  <>
    <PageHeading>Hello, I'm Chandler</PageHeading>
    <StyledP>
      I am a software developer in New York City working to reduce friction in healthcare
      delivery at <a href="https://ro.co">Ro</a>.
    </StyledP>
    <StyledP>
      I am also working on reducing the friction in design hiring at <a href="https://keming.io">Keming.io</a>.
    </StyledP>
    <StyledP>I write about <TagsRotator tags={tags} />.</StyledP>
  </>
)

export default Bio
