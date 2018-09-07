const webpack = require('webpack');
const path = require('path');

module.exports = require('./webpack.common.js');
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'NODE_ENV': JSON.stringify('development')
  })
);

module.exports.module.rules.push({
  test: /\.js$/,
  use: ["source-map-loader"],
  enforce: "pre",
  exclude: [
    path.resolve(__dirname, 'node_modules'),
  ]
});