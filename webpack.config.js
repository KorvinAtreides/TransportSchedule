const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const CopyPlugin = require(`copy-webpack-plugin`);
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(js)$/, use: "babel-loader" },
    ],
  },
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080/`,
    hot: true,
    compress: true,
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
    }),
  ],
};
