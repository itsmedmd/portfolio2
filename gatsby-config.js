module.exports = {
  siteMetadata: {
    title: "Deimantas Butėnas - Portfolio",
    description: "Portfolio website of a front-end developer Deimantas Butėnas.",
    siteUrl: "https://www.deimantasbutenas.lt/",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
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
