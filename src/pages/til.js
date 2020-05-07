import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { rhythm } from '../utils/typography'

const TIL = ({ data, location }) => {
  const { title: siteTitle } = data.site.siteMetadata

  const renderPosts = () => {
    const posts = data.allMarkdownRemark.edges

    return posts.map(({ node }) => {
      const { slug } = node.fields
      const { title, date, description } = node.frontmatter

      return (
        <div key={slug}>
          <h3 style={{ marginBottom: rhythm(1 / 4) }}>
            <Link style={{ boxShadow: 'none' }} to={slug}>
              {title || slug}
            </Link>
          </h3>
          <small>{date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: description || node.excerpt,
            }}
            style={{ marginBottom: rhythm(0.5) }}
          />
        </div>
      )
    })
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Today I Learned" />
      <h1 style={{ fontSize: 56, marginTop: 0 }}>Today I Learned</h1>
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
      sort: {
        fields: [frontmatter___date], order: DESC
      }
      filter: {
        frontmatter: {tags: {eq: "TIL"}}
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
          }
        }
      }
    }
  }
`

export default TIL
