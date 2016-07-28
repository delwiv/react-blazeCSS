var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var libraryName = 'react-blazecss';
var outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [ {
      test: /\.js$/,
      loader: 'babel',
      exclude: /(node_modules)/
    }]
  },
  plugins: [
    new UglifyJsPlugin({ minimize: true })
  ],
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  externals: [
    'react'
  ]
};

module.exports = config;
