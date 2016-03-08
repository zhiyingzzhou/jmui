'use strict'

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

var extractTextWebpackPlugin = new ExtractTextPlugin('styles/[name].css')

module.exports = {
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'react-addons-css-transition-group': {
      root: 'ReactCSSTransitionGroup',
      commonjs2: 'react-addons-css-transition-group',
      commonjs: 'react-addons-css-transition-group',
      amd: 'react-addons-css-transition-group'
    }
  },
  entry: {
    'jmui': path.resolve(__dirname, '../src/index.js'),
    'jmui.core': path.resolve(__dirname, '../src/styles/jmui.less'),
    'jmui.layout.dark': path.resolve(__dirname, '../src/styles/layout/dark.less'),
    'jmui.layout.white': path.resolve(__dirname, '../src/styles/layout/white.less'),
    'jmui.theme.gray': path.resolve(__dirname, '../src/styles/theme/gray.less'),
    'jmui.theme.white': path.resolve(__dirname, '../src/styles/theme/white.less'),
    'jmui.theme.black': path.resolve(__dirname, '../src/styles/theme/black.less'),
    'jmui.theme.green': path.resolve(__dirname, '../src/styles/theme/green.less'),
    'jmui.theme.lightblue': path.resolve(__dirname, '../src/styles/theme/lightblue.less'),
    'jmui.theme.orange': path.resolve(__dirname, '../src/styles/theme/orange.less'),
    'jmui.theme.pink': path.resolve(__dirname, '../src/styles/theme/pink.less'),
    'jmui.theme.red': path.resolve(__dirname, '../src/styles/theme/red.less'),
    'jmui.theme.yellow': path.resolve(__dirname, '../src/styles/theme/yellow.less'),
    'jmui.theme.blue': path.resolve(__dirname, '../src/styles/theme/blue.less')
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'jmui',
    libraryTarget: 'umd'
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
      }
    ]
  },
  eslint: {
    configFile: path.resolve(__dirname, '../.eslintrc')
  },
  resolve: {
    extensions: ['', '.js']
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
