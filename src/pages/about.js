import React from 'react'
import { FullHeightContainer, Layout, SEO } from '../components'

const AboutPage = ({ location }) => {
  return (
    <Layout location={location}>
      <FullHeightContainer centerContent>
        <SEO title="About" />
      </FullHeightContainer>
    </Layout>
  )
}

export default AboutPage
