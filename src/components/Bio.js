import React from 'react'
import styled from 'styled-components'

import { Appear, PageHeading, TagsRotator } from './'

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`

const Bio = ({ tags }) => (
  <Appear>
    <PageHeading>Hello, I'm Chandler</PageHeading>

    <StyledP>
      I am a software developer, product designer, and technology educator
      living in <del>New York City</del> Colorful Colorado.
    </StyledP>

    <StyledP>
      By day I work to reduce friction in, and expand access to, healthcare
      delivery at <a href="https://ro.co">Ro</a>.
    </StyledP>

    <StyledP>
      By night I help founders with early-stage technology decisions at{' '}
      <a href="https://foundation.codes">Foundation</a>.
    </StyledP>

    <StyledP>
      I write about <TagsRotator tags={tags} />.
    </StyledP>
  </Appear>
)

export default Bio
