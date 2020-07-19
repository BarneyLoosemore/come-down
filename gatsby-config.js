module.exports = {
  siteMetadata: {
    title: `Come Down | Sola Simpson`,
    description: `Come Down - a comic by Sola Simpson`,
    author: `@barneyloosemore`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/comedown-favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `comedown`,
        linkResolver: ({ node, key, value }) => page => `/${page.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        head: true,
      },
    },
  ],
}
