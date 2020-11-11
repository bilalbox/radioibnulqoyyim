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
    `gatsby-plugin-svgr-svgo`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Radio IQ`,
        short_name: `Radio IQ`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
        icon_options: { purpose: `any maskable` },
      },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
