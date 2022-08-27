import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Appear, PageHeading, PageParagraph, TagsRotator } from './'

const waveEmotion = keyframes`
  0% {
    transform: rotate(1deg);
  }
  5% {
    transform: rotate(10deg);
  }
  10% {
    transform: rotate(1deg);
  }
  15% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(1deg);
  }
  25% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(1deg);
  }
`

const EmojiWave = styled.span`
  display: inline-block;
  animation: 5s ${waveEmotion} 2s infinite;
`

const Bio = ({ tags }) => (
  <Appear>
    <PageHeading>
      <EmojiWave>👋</EmojiWave> Hello, I'm Chandler
    </PageHeading>

    <PageParagraph>
      I am a software developer, product designer, and technology educator
      living in Colorful Colorado.
    </PageParagraph>

    <PageParagraph>
      By day I build software to manage chronic health conditions at{' '}
      <a href="https://www.marleymedical.com/">Marley Medical</a>.
    </PageParagraph>

    <PageParagraph>
      By night I help founders with early-stage technology decisions at{' '}
      <a href="https://foundation.codes">Foundation</a>.
    </PageParagraph>

    <PageParagraph>
      I write about <TagsRotator tags={tags} />.
    </PageParagraph>
  </Appear>
)

export default Bio
