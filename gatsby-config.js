module.exports = {
  siteMetadata: {
    title: 'Bill Risher',
    author: 'Bill Risher',
    description: 'A developer with a dedication to keep software free and open forever.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Bill Risher',
        short_name: 'billrisher',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/br.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
