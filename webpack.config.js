const path = require("path");
const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.jsx"),
    vendor: [
      "react",
      "react-dom",
      "react-router",
      "react-router-dom",
      "redux",
      "react-redux"
    ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   inject: true
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
