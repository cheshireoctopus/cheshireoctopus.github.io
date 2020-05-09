import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import PostTags from './PostTags'

import { rhythm } from '../utils/typography'

const BlogPost = ({ post }) => {
  const { slug } = post.fields
  const { title, date, description, tags } = post.frontmatter

  return (
    <div>
      <h2 style={{ marginBottom: rhythm(1 / 4) }}>
        <Link
          style={{ boxShadow: 'none', backgroundImage: 'none' }}
          to={slug}
        >
          {title || slug}
        </Link>
      </h2>

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