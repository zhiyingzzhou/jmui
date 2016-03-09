'use strict'

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

var extractTextWebpackPlugin = new ExtractTextPlugin('[name].css')

module.exports = {
  entry: {
    'ios': path.resolve(__dirname, '../kitchensink/ios/index.js')
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../dist/kitchensink/ios')
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.less$/,
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.css$/,
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  eslint: {
    configFile: path.resolve(__dirname, '../.eslintrc')
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [
    extractTextWebpackPlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
}
