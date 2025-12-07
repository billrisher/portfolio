import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Bill Risher",
    author: "Bill Risher",
    description:
      "A developer with a dedication to keep software free and open forever.",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp"],
          quality: 85,
          placeholder: "blurred",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bill Risher",
        short_name: "billrisher",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/br.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          quietDeps: true,
          silenceDeprecations: [
            "legacy-js-api",
            "import",
            "global-builtin",
            "slash-div",
            "color-functions",
          ],
        },
      },
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: false,
        develop: false,
        tailwind: false,
        ignore: ["/fontawesome/"],
        purgeCSSOptions: {
          safelist: {
            standard: ["active", "timeout", "is-loading", "is-article-visible"],
            deep: [/^fa-/, /^icon$/],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [
            "Cache-Control: public, max-age=31536000, immutable",
          ],
          "/page-data/*": [
            "Cache-Control: public, max-age=0, must-revalidate",
          ],
        },
      },
    },
  ],
};

export default config;
