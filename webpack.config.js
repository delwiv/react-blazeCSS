var path = require('path')
var webpack = require('webpack')

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

var libraryName = 'react-blazecss'

var config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: libraryName + '.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /(node_modules)/,
      query: {
        presets: [
          "es2015",
          "react",
          "stage-2"
        ],
        plugins: [
          "transform-class-properties",
          "transform-inline-environment-variables"
        ]
      }
    }]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: [
    new UglifyJsPlugin({ minimize: true })
  ],
  externals: [{
    'react': 'React'
  }]
};

module.exports = config;
