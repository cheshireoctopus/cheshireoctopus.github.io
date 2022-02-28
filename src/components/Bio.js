import React from 'react'
import { Appear, PageHeading, PageParagraph, TagsRotator } from './'

const Bio = ({ tags }) => (
  <Appear>
    <PageHeading>👋 Hello, I'm Chandler</PageHeading>

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
