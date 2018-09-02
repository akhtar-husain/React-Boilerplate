const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
  filename: './style.css'
});

module.exports = {
  entry: ["babel-polyfill", "../src/index.js"],
  devtool: "cheap-module-eval-source-map",
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  context: path.resolve(__dirname, 'src'),
  devServer: {
    contentBase: path.resolve(__dirname, 'public/assets'),
    stats: 'errors-only',
    open: true,
    port: 8080,
    compress: true,
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new Dotenv({
      safe: true,
      systemvars: true,
      silent: true
    }),
    new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: './style.css'
    }),
    extractPlugin
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/',
            }
          }
        ]
      },
      {
        test: /\s?css$/,
        use: extractPlugin.extract({
          use: ["css-loader", "sass-loader", "postcss-loader"],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ]
      }
    ]
  }
}