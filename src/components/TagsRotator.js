import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const TagsRotator = ({ tags }) => {
  const formattedTags = tags.map(obj => obj.tag)
  const initialState = {
    index: 0,
    tag: formattedTags[0],
  }
  const [currentTag, setCurrentTag] = useState(initialState)

  useEffect(() => {
    const interval = setInterval(() => {
      const { index } = currentTag
      const nextTag = formattedTags[index + 1]

      if (nextTag) {
        setCurrentTag({
          index: index + 1,
          tag: nextTag,
        })
      } else {
        setCurrentTag(initialState)
      }
    }, 2500)

    return () => clearInterval(interval)
  })

  return <Link to={`/tags/${kebabCase(currentTag.tag)}/`}>{currentTag.tag}</Link>
}

export default TagsRotator
