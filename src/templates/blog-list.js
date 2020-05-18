import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Pagination from '../components/Pagination'
import BlogPost from '../components/BlogPost'
import { PageHeading } from '../components/styled-components'

const BlogList = ({
  data,
  location,
  pageContext,
}) => {
  const tags = data.tags.group
  const { title: siteTitle } = data.site.siteMetadata
  const isFirstPage = pageContext.currentPage === 1
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Writing" />

      {isFirstPage && (
        <PageHeading>Writing</PageHeading>
      )}

      {posts.map(post => (
        <div key={post.node.fields.slug}>
          <BlogPost post={post.node} />
        </div>
      ))}

      <Pagination {...pageContext} />
    </Layout>
  )
}

export default BlogList

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
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
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }
      filter: {
        frontmatter: {
          is_til: { eq: null }
        }
      }
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
            tags
            isTil: is_til
          }
        }
      }
    }
  }
`
