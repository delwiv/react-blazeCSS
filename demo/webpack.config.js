var getConfig = require('hjs-webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = getConfig({
  in: 'src/index.js',
  out: 'dist/'
})

config.plugins.push(
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html'),
    hash: false,
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  })
)

module.exports = config
