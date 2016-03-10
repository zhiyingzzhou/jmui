'use strict'

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

var extractTextWebpackPlugin = new ExtractTextPlugin('[name].[contenthash].css')
var env = process.env.NODE_ENV || 'development'

var webpackConfig = {
  entry: {
    'kitchensink.ios': path.resolve(__dirname, '../kitchensink/ios/index.js')
  },
  output: {
    filename: '[name].[hash].min.js',
    path: path.resolve(__dirname, '../site/kitchensink/ios'),
    publishPath: '/'
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
      },
      { test: /\.woff(\?.*)?$/, loader: 'file?prefix=[name].[contenthash].[ext]' },
      { test: /\.woff2(\?.*)?$/, loader: 'file?prefix=[name].[contenthash].[ext]' },
      { test: /\.otf(\?.*)?$/, loader: 'file?prefix=[name].[contenthash].[ext]' },
      { test: /\.ttf(\?.*)?$/, loader: 'file?prefix=[name].[contenthash].[ext]' },
      { test: /\.eot(\?.*)?$/, loader: 'file?prefix=[name].[contenthash].[ext]' },
      { test: /\.svg(\?.*)?$/, loader: 'file?prefix=[name].[contenthash].[ext]' },
      { test: /\.(png|jpg)$/, loader: 'file?prefix=[name].[contenthash].[ext]' }
    ]
  },
  eslint: {
    configFile: path.resolve(__dirname, '../.eslintrc')
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      'jmui': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    extractTextWebpackPlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../kitchensink/ios/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ]
}

if (env === 'production') {
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  }))
}

module.exports = webpackConfig
