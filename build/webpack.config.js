'use strict'

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var cssnano = require('cssnano')
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
    }
  },
  entry: {
    main: path.resolve(__dirname, '../src/index.js'),
    'theme.gray': path.resolve(__dirname, '../src/styles/theme/gray.less'),
    'theme.white': path.resolve(__dirname, '../src/styles/theme/white.less')
  },
  output: {
    filename: 'jmui.min.js',
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
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.less$/,
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
      },
      {
        test: /\.css$/,
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url?name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: 'url?name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url?name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }
    ]
  },
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      safe: true,
      discardComments: {
        removeAll: true
      }
    })
  ],
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
