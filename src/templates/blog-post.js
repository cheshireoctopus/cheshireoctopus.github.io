import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const ScrolledHeading = styled.div`
  background: white;
  box-shadow: 1px 1px 3px black;
  display: ${({ render }) => render ? 'flex' : 'none'};
  left: 0;
  padding: 16px;
  position: fixed;
  opacity: ${({ render }) => render ? 1 : 0};
  right: 0;
  top: 0;
  z-index: 1;
`

const ScrolledTitle = styled.div`
  font-family: 'Roboto Slab',sans-serif;
  font-size: 1em;
`;

const ScrolledHomeLink = styled(Link)`
  background-image: none;
  margin-right: 16px;
`;

const BlogPostTemplate = ({
  data,
  location,
  pageContext,
}) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const [scrolledHeader, setScrolledHeader] = useState(false)

  useEffect(() => {
    const scrollEvent = window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        setScrolledHeader(true)
      } else {
        setScrolledHeader(false)
      }
    })

    return () => window.removeEventListener('scroll', scrollEvent)
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h1>{post.frontmatter.title}</h1>
      <ScrolledHeading render={scrolledHeader}>
        <ScrolledHomeLink to="/">
          ←
        </ScrolledHomeLink>
        <ScrolledTitle>{post.frontmatter.title}</ScrolledTitle>
      </ScrolledHeading>
      <p
        style={{
          ...scale(-1 / 5),
          display: 'block',
          marginBottom: rhythm(1),
          marginTop: rhythm(-1),
        }}
      >
        {post.frontmatter.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
