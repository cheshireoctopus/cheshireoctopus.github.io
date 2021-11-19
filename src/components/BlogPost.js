import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { PostTags } from '.'

const PostTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.getSpace(1)};
`

import { rhythm } from '../utils/typography'

const BlogPost = ({ post }) => {
  const { slug } = post.fields
  const { title, date, description, tags } = post.frontmatter
  const url = `/writing${slug}`

  return (
    <div>
      <PostTitle>
        <Link to={url}>{title}</Link>
      </PostTitle>

      <div style={{ marginBottom: rhythm(1 / 3) }}>
        <b>{date}</b>
      </div>

      <p
        dangerouslySetInnerHTML={{
          __html: description || post.excerpt,
        }}
        style={{ marginBottom: rhythm(0.5) }}
      />

      {tags && <PostTags tags={tags} />}
    </div>
  )
}

BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
}

export default BlogPost
