import React from 'react'
import Layout from '../components/layout'

const Activity = ({ location }) => {
  return (
    <Layout location={location}>
      <h1>Programming Activity</h1>
      <figure>
        <embed src="https://wakatime.com/share/@8ac2ead5-5dea-4c58-8987-d14005828cc0/932f6686-70c2-4986-a94b-df89f9148e51.svg" />
      </figure>
    </Layout>
  )
}

export default Activity

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
