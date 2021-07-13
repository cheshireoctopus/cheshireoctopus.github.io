import React from 'react'
import { graphql } from 'gatsby'

import { Appear, BlogPost, Layout, PageHeading, SEO } from '../components'

const Notes = ({ data, location }) => {
  const { title: siteTitle } = data.site.siteMetadata

  const renderPosts = () => {
    const posts = data.allMarkdownRemark.edges

    return posts.map(post => (
      <div key={post.node.fields.slug}>
        <BlogPost post={post.node} />
      </div>
    ))
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Notes" />

      <Appear>
        <PageHeading>Notes</PageHeading>
        {renderPosts()}
      </Appear>
    </Layout>
  )
}

export const pageQuery = graphql`
  query tilPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { is_til: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            isTIL: is_til
          }
        }
      }
    }
  }
`

export default Notes
