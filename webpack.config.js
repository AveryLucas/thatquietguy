module.exports = {
  module: {
    rules: [
      {
        test: /\.(md|mdx)$/,
        loader: require.resolve("@mdx-js/loader"),
      },
    ],
  },
};
