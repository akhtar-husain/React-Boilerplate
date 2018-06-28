const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.common.js');
module.exports.plugins.push(
    new webpack.DefinePlugin({
        'NODE_ENV': JSON.stringify('development')
    })
)