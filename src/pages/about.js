import React from 'react'
import {
  Appear,
  FullHeightContainer,
  Layout,
  PageHeading,
  PageParagraph,
  SEO,
} from '../components'

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <FullHeightContainer centerContent>
        <SEO title="About" />

        <Appear>
          <PageHeading>About</PageHeading>

          <PageParagraph>👋 Hello, I am Chandler.</PageParagraph>

          <PageParagraph>
            I am a software engineer, product designer, and technology educator
            living in Colorful Colorado.
          </PageParagraph>

          <PageParagraph>
            I work as a staff software engineer at{' '}
            <a href="https://www.marleymedical.com/">Marley Medical</a> where I
            build technology to manage chronic health conditions. By night, I
            help (often) first-time founders with early-stage technology
            decisions at <a href="https://www.foundation.codes/">Foundation</a>,
            my boutique digital consultancy.
          </PageParagraph>

          <PageParagraph>
            My career as a technologist began in New York City where I worked
            with a number of high-growth, venture-backed startups in the{' '}
            <a href="https://www.linkedin.com/company/ende-solutions">energy</a>
            , <a href="https://percolate.com/">enterprise marketing</a>,{' '}
            <a href="https://teachable.com/">e-commerce</a>,{' '}
            <a href="https://generalassemb.ly/">edu-tech</a>, and{' '}
            <a href="https://ro.co/">health-tech</a> industries. I have been the
            first hire, the fiftieth hire, and everywhere in-between.
          </PageParagraph>

          <PageParagraph>
            As a technologist, my interests lie developing client-side
            applications which explore the intersection of technology,
            psychology, and design. Since 2019 my work has focused on how
            technology can be used to impart positive behavioral change with
            respect to healthy living and wellness awareness.
          </PageParagraph>

          <PageParagraph>
            In a previous life, I spent more than half-a-decade as a technology
            instructor teaching foundational web development at technical
            schools. Mentorship continues to be an integral part of my
            professional life: I mentor software developers early in their
            careers and founded and lead Ro's Software Engineering Fellowship
            program for two years.
          </PageParagraph>

          <PageParagraph>
            Beyond technology and startups, interests include: cycling, skiing,
            surfing, sailing, overlanding, 35mm photography, urban design, and
            woodworking.
          </PageParagraph>

          <PageParagraph>
            Want to get in touch? I can be reached at{' '}
            <b>hello@chandlermoisen.com</b>.
          </PageParagraph>
        </Appear>
      </FullHeightContainer>
    </Layout>
  )
}

export default AboutPage
