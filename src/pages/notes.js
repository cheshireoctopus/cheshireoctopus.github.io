import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BlogPost from '../components/BlogPost'
import { PageHeading } from '../components/styled-components'

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

      <PageHeading>Notes</PageHeading>

      <p>
        <i>
          In a perfect world I set aside 30 minutes at the end of each work day
          to reflect on something that I learned or found interesting during the
          day.
        </i>
      </p>

      <hr style={{ marginBottom: 0 }} />

      {renderPosts()}
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
