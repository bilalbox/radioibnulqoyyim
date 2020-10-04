require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Radio Ibnul Qoyyim`,
    description: `Radio Ibnul Qoyyim - Radio Sunnah Indonesia`,
    author: `أبو عبدالمجيد الأمريكي`,
    siteUrl: `https://www.radioibnulqoyyim.com`,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `${__dirname}/src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radio IQ`,
        short_name: `Radio IQ`,
        start_url: `/`,
        background_color: `#0f111a`,
        theme_color: `#00BFFF`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
        icon_options: { purpose: `any maskable` },
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
