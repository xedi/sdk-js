const result = require('dotenv').config();

if (result.error) {
    throw result.error;
}

module.exports = {
  pathPrefix: "sdk-js",
  siteMetadata: {
    title: 'XEDI.JS',
    shortName: 'XEDI.JS',
    description: 'Documentation for the XEDI JavaScript SDK'
  },
  plugins: [
        {
            resolve: '@primer/gatsby-theme-doctocat',
            options: {
                repoRootPath: '..',
                icon: './src/images/xedi-logo-dark.png'
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
              name: 'XEDI JavaScript SDK',
              short_name: 'XEDI JS SDK',
              start_url: '/',
              background_color: '#24292e',
              theme_color: '#24292e',
              display: 'standalone'
            },
        },
        'gatsby-plugin-offline'
    ],
}
