const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/app.jsx"),
    vendor: ["react", "react-dom"]
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
