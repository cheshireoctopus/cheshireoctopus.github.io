import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ justifyEnd }) =>
    justifyEnd ? 'flex-end' : 'space-between'};
`

const BlogPostDirectionalNavigation = ({ isTIL, next, previous }) => (
  <Container justifyEnd={!previous}>
    {previous && (
      <Link
        to={`/${isTIL ? 'notes' : 'writing'}${previous.fields.slug}`}
        rel="prev"
      >
        ← {previous.frontmatter.title}
      </Link>
    )}

    {next && (
      <Link
        to={`/${isTIL ? 'notes' : 'writing'}${next.fields.slug}`}
        rel="next"
      >
        {next.frontmatter.title} →
      </Link>
    )}
  </Container>
)

BlogPostDirectionalNavigation.propTypes = {
  isTIL: PropTypes.bool,
  next: PropTypes.object,
  previous: PropTypes.object,
}

BlogPostDirectionalNavigation.defaultProps = {
  isTIL: false,
  next: undefined,
  previous: undefined,
}

export default BlogPostDirectionalNavigation
