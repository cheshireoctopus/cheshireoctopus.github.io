import React from 'react'
import { graphql } from 'gatsby'

import { Bio, FullHeightContainer, Layout, SEO } from '../components'

const IndexPage = ({ data, location }) => {
  const tags = data.tags.group
  const { title: siteTitle } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <FullHeightContainer centerContent>
        <SEO />

        <Bio tags={tags} />
      </FullHeightContainer>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    tags: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        value: fieldValue
      }
    }
  }
`
