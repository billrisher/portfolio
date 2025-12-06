import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Bill Risher',
    author: 'Bill Risher',
    description: 'A developer with a dedication to keep software free and open forever.',
  },
  plugins: [
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
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          quietDeps: true,
          silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'slash-div', 'color-functions'],
        },
      },
    },
    'gatsby-plugin-typescript',
  ],
};

export default config;
