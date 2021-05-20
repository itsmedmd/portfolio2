module.exports = {
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    DEV_SSR: false,
  },
  siteMetadata: {
    title: "Deimantas Butėnas - Portfolio",
    description: "Portfolio website of a front-end developer Deimantas Butėnas.",
    siteUrl: "https://www.deimantasbutenas.lt/",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-175798206-1",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
