import React from 'react'
import { graphql } from 'gatsby'

import {
  Appear,
  FullHeightContainer,
  Layout,
  PageHeading,
  SEO,
} from '../components'

const Activity = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Activity" />

      <FullHeightContainer>
        <Appear>
          <PageHeading>Activity</PageHeading>

          <p>
            I use <a href="https://wakatime/com">WakaTime</a> to track time
            spent developing. Chances are the following chart is composed
            largely of JavaScript.
          </p>

          <figure>
            <embed src="https://wakatime.com/share/@8ac2ead5-5dea-4c58-8987-d14005828cc0/932f6686-70c2-4986-a94b-df89f9148e51.svg" />
          </figure>
        </Appear>
      </FullHeightContainer>
    </Layout>
  )
}

export default Activity

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
