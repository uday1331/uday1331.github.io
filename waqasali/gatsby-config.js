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
        name: `Waqas Ali`,
        short_name: `waqas-ali`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        theme_color_in_head: false,
        display: `minimal-ui`,
        icon: `src/images/waqas-ali.jpg` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-chakra-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
