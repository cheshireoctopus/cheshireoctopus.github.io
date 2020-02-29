import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

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

export default PostTags
