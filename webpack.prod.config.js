var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = require('./webpack.common.js');
delete module.exports.devtool;
module.exports.output.publicPath = 'http://wonderprojectdesk.com/delgate/';
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  })
);
module.exports.optimization = {
  splitChunks: {
    cacheGroups: {
      commons: {
        test: "/[\\/]node_modules[\\/]",
        name: "vendors",
        chunks: "all"
      }
    }
  },
  runtimeChunk: true,
};
module.exports.module.rules.forEach(rule => {
  delete rule.exclude;
  return rule;
});
module.exports.plugins.push(
  new UglifyJsPlugin({
    extractComments: false,
    warningsFilter: false
  })
);