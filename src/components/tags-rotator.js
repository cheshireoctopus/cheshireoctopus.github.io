import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

const getTagNames = allMarkdownRemark => {
  return allMarkdownRemark.group.map(obj => obj.tag)
}

const TagsRotator = ({ allMarkdownRemark }) => {
  const tags = getTagNames(allMarkdownRemark)
  const initialState = {
    index: 0,
    tag: tags[0],
  }
  const [currentTag, setCurrentTag] = useState(initialState)

  useEffect(() => {
    const interval = setInterval(() => {
      const { index, tag } = currentTag
      const nextTag = tags[index + 1]

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

  return currentTag.tag
}

export default TagsRotator
