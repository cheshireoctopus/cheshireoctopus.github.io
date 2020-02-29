import React from 'react'
import TagsRotator from './TagsRotator'

const Bio = ({ tags }) => (
  <>
    <p style={{ fontSize: '36px' }}>👋</p>
    <p>
      Hello. I am a software developer in New York City working to reduce friction in healthcare
            delivery at <a href="https://ro.co">Ro</a>.
          </p>
    <p>
      I am also working on reducing the friction in design hiring at <a href="https://keming.io">Keming.io</a>.
          </p>
    <p>I write about <TagsRotator tags={tags} />.</p>
  </>
)

export default Bio
