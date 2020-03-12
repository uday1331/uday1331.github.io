module.exports = {
  siteMetadata: {
    title: `Waqas Ali`,
    description: `Hi, I am Waqas and this is my personal website describing my projects, experience and achievements so far.`,
    lastUpdated: `13 March 2020`,
    twitter: "@totally_waqas",
    github: "WaqasAliAbbasi",
    linkedin: "waqasaliabbasi",
    email: "waqas.abbasi@outlook.com"
  },
  plugins: [
    `gatsby-plugin-typescript`,
    "gatsby-plugin-typescript-checker",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-46712607-5",
        head: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-chakra-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Waqas Ali`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        theme_color_in_head: false,
        display: `minimal-ui`,
        icon: `src/images/waqas-ali.jpg` // This path is relative to the root of the site.
      }
    },
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
        name: `posts`,
        path: `${__dirname}/src/posts`
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
    },
    `gatsby-source-local-git`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
