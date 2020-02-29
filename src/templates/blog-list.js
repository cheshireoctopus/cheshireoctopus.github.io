import React from 'react'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import Layout from '../components/layout'
import SEO from '../components/seo'
import TagsRotator from '../components/tags-rotator'

import { rhythm } from '../utils/typography'

const PostTags = ({ tags }) => {
  tags.sort()

  return tags.map(tag => (
    <span
      key={tag}
      className="tag"
    >
      <Link to={`/tags/${kebabCase(tag)}/`}>
        {tag}
      </Link>
    </span>
  ))
}

class BlogList extends React.Component {
  renderBio() {
    const { data, pageContext } = this.props

    if (pageContext.currentPage > 1) {
      return null
    }

    return (
      <>
        <p style={{ fontSize: '36px' }}>👋</p>
        <p>
          Hello. I am a software developer in New York City working to reduce friction in healthcare
            delivery at <a href="https://ro.co">Ro</a>.
          </p>
        <p>
          I am also working on reducing the friction in design hiring at <a href="https://keming.io">Keming.io</a>.
          </p>
        <p>I write about <TagsRotator allMarkdownRemark={data.allMarkdownRemark} />.</p>
      </>
    )
  }

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

  renderPagination() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 36 }}>
        <div>
          {!isFirstPage && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
        </div>
        <div>
          {!isLastPage && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </div>
      </div>
    )
  }

  render() {
    const { data, location } = this.props
    const { title: siteTitle } = data.site.siteMetadata

    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        {this.renderBio()}
        {this.renderPosts()}
        {this.renderPagination()}
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
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
      }
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
