module.exports = {
  siteMetadata: {
    title: "BMOTIVATE",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout"),
        },
      },
    },
  ],
};
