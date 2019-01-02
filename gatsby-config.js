module.exports = {
  siteMetadata: {
    title: 'marcuslindfeldt.se',
    description: 'Personal website',
    author: 'Marcus Lindfeldt',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Work Sans:500,700', 'Source Sans Pro:300,400,500'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'marcuslindfeldt.se',
        short_name: 'MLSE',
        start_url: '/',
        background_color: '#f2f2f2',
        theme_color: '#f2f2f2',
        display: 'minimal-ui',
        icon: 'src/images/logo-black@2x.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
