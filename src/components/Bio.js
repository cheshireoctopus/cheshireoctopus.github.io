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
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`

const Bio = ({ tags }) => (
  <>
    <PageHeading>Hello, I'm Chandler</PageHeading>

    <StyledP>
      I am a software developer, product designer, and technology educator living in New York City.
    </StyledP>

    <StyledP>
      By day I work to reduce friction in healthcare delivery at <a href="https://ro.co">Ro</a>.
      By night I work to reduce friction in digital design hiring at <a href="https://keming.io">Keming</a>.
    </StyledP>

    <StyledP>

    </StyledP>

    <StyledP>I write about <TagsRotator tags={tags} />.</StyledP>
  </>
)

export default Bio
