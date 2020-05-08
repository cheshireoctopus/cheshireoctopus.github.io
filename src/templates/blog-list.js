import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/Bio'
import PostTags from '../components/PostTags'
import Pagination from '../components/Pagination'

import { rhythm } from '../utils/typography'

class BlogList extends React.Component {
  renderPosts() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return posts.map(({ node }) => {
      const { slug } = node.fields
      const { title, date, description, tags } = node.frontmatter

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
          <div>
            <PostTags tags={tags} />
          </div>
        </div>
      )
    })
  }

  render() {
    const { data, location, pageContext } = this.props
    const tags = data.tags.group
    const { title: siteTitle } = data.site.siteMetadata
    const isFirstPage = pageContext.currentPage === 1

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        {isFirstPage && <Bio tags={tags} />}
        {this.renderPosts()}
        <Pagination {...pageContext} />
      </Layout>
    )
  }
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
      sort: { fields: [frontmatter___date], order: DESC }
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
          }
        }
      }
    }
  }
`
