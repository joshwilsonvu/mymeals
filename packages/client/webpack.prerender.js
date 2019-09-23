"use strict";

const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.common");

module.exports = merge.strategy({ entry: "replace", optimization: "replace" })(
  common,
  {
    entry: {
      prerender: "./prerender.js"
    },
    optimization: {},
    mode: "production",
    target: "node",
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, "prerendered"),
      library: "prerendered",
      libraryTarget: "commonjs"
    }
  }
);
