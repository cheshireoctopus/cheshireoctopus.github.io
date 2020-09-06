import React from 'react'
import { graphql } from 'gatsby'

import {
  Appear,
  BlogPostDate,
  BlogPostDirectionalNavigation,
  FullHeightContainer,
  Layout,
  PageHeading,
  SEO,
} from '../components'

const BlogPostTemplate = ({ data, location, pageContext }) => {
  const {
    excerpt,
    frontmatter: { date, description, isTIL, title },
    html,
  } = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={title} description={description || excerpt} />

      <FullHeightContainer>
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
