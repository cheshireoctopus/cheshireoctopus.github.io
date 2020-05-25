import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/Bio'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 322px);
  justify-content: center;
`

const IndexPage = ({
  data,
  location,
}) => {
  const tags = data.tags.group
  const { title: siteTitle } = data.site.siteMetadata

  return (
    <Layout location={location} title={siteTitle}>
      <Wrapper>
        <SEO />

        <Bio tags={tags} />
      </Wrapper>
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
