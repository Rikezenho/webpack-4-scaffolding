const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
