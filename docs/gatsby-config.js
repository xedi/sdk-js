module.exports = {
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
        }
    ],
}
