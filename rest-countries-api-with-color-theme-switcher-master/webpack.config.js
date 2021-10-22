const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = process.env.NODE_ENV == "development" ? "development" : "production";

module.exports = {
  mode: mode,
  cache: { type: "filesystem" },
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
    publicPath: "/",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      { test: /\.(png|jpe?g|gif|m4v)$/i, type: "asset" },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [{ prefixIds: false }],
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules|lib/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  performance: {
    hints: false,
  },
  // devtool: "source-map",
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    hot: true,
  },
};
