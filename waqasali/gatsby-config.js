module.exports = {
  siteMetadata: {
    title: `Waqas Ali`,
    description: `Hi, I am Waqas and this is my personal website describing my projects, experience and achievements so far.`,
    author: `@waqasaliabbasi`,
    lastUpdated: `4 March 2020`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-typescript-checker",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        icon: `src/images/waqas-ali.jpg` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-chakra-ui"
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
