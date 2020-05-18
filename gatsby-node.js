const path = require('path')
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const blogList = path.resolve('src/templates/blog-list.js')
  const blogPostTemplate = path.resolve('src/templates/blog-post.js')
  const tagTemplate = path.resolve('src/templates/tags.js')

  // Fetch blog posts
  const blogPostQuery = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          sort: {
            fields: [frontmatter___date],
            order: DESC
          }
          filter: {
            frontmatter: {
              is_til: { eq: null }
            }
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  )

  if (blogPostQuery.errors) {
    return reporter.panicOnBuild('Error while running GraphQL query.')
  }

  // Create blog posts pages.
  const posts = blogPostQuery.data.postsRemark.edges
  
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: `writing${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create tags
  const tags = blogPostQuery.data.tagsGroup.group

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/writing' : `/writing/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      }
    })
  })

  // Fetch TIL posts
  const tilPostsQuery = await graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          sort: {
            fields: [frontmatter___date],
            order: DESC
          }
          filter: {
            frontmatter: {
              is_til: { eq: true }
            }
          }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (tilPostsQuery.errors) {
    return reporter.panicOnBuild('Error while running GraphQL query to fetch TIL posts.')
  }

  // Create blog posts pages.
  const tilPosts = tilPostsQuery.data.postsRemark.edges

  tilPosts.forEach((post, index) => {
    const previous = index === tilPosts.length - 1 ? null : tilPosts[index + 1].node
    const next = index === 0 ? null : tilPosts[index - 1].node

    createPage({
      path: `til${post.node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  return null
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
