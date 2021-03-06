"use strict";

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: path.join("..", "reports", "report.html"),
      openAnalyzer: false
    }),
    new HtmlWebpackPlugin({
      template: "template.js"
    })
  ]
});
