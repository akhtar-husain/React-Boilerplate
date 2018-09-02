const webpack = require('webpack');

module.exports = require('./webpack.common.js');
module.exports.plugins.push(
  new webpack.DefinePlugin({
    //'process.env.NODE_ENV': JSON.stringify('development')
    'NODE_ENV': JSON.stringify('development')
  })
)