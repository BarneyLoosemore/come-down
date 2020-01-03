const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)
  const template = path.resolve("src/templates/page.js")
  pages.data.allPrismicPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
