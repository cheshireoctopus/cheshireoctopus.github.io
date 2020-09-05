import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import {
  Appear,
  BlogPostDate,
  BlogPostDirectionalNavigation,
  FullHeightContainer,
  Layout,
  PageHeading,
  SEO,
} from '../components'

const ScrolledHeading = styled.div`
  background: white;
  box-shadow: 1px 1px 3px black;
  display: ${({ render }) => (render ? 'flex' : 'none')};
  left: 0;
  padding: 16px;
  position: fixed;
  opacity: ${({ render }) => (render ? 1 : 0)};
  right: 0;
  top: 0;
  z-index: 1;
`

const ScrolledTitle = styled.h4`
  font-size: 1em;
  margin: 0;
  margin-top: ${({ theme }) => theme.space[1]}px;
`

const ScrolledHomeLink = styled(Link)`
  background-image: none;
  margin-right: 16px;
`

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const {
    excerpt,
    frontmatter: { date, description, isTIL, title },
    html,
  } = data.markdownRemark
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
      <SEO title={title} description={description || excerpt} />

      <FullHeightContainer>
        <ScrolledHeading render={scrolledHeader}>
          <ScrolledHomeLink to="/">←</ScrolledHomeLink>

          <ScrolledTitle>{title}</ScrolledTitle>
        </ScrolledHeading>

        <Appear>
          <PageHeading>{title}</PageHeading>

          <BlogPostDate>{date}</BlogPostDate>

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <hr style={{ marginBottom: '30px' }} />

          <BlogPostDirectionalNavigation
            isTIL={isTIL}
            next={next}
            previous={previous}
          />
        </Appear>
      </FullHeightContainer>
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
        isTIL: is_til
      }
    }
  }
`
