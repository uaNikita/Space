'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: path.join(__dirname, 'src'),

  // The entry point for the bundle.
  entry: './main.js',

  // Options affecting the output.
  output: {
    path: path.join(__dirname, 'dist'),
    // The filename of the entry chunk as relative path inside the output.path directory.
    filename: '[name].js'
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("[name].css")
  ],

  // Options affecting the resolving of modules.
  resolve: {
    // An array of directory names to be resolved to the current directory as well as its ancestors, and searched for modules.
    modulesDirectories: ['node_modules'],
    // An array of extensions that should be used to resolve modules.
    extensions: ['', '.js']
  },

  // Like resolve but for loaders.
  resolveLoader: {
    modulesDirectories: ['node_modules'],
    // It describes alternatives for the module name that are tried.
    moduleTemplates: ['*-loader'],
    extention: ['', '.js']
  },

  // Options affecting the normal modules
  module: {

    // A array of automatically applied loaders.
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]

  },
  postcss: function () {
    return [autoprefixer({browsers: ["> 3%"]})];
  }

};