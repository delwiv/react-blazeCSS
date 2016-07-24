var getConfig = require('hjs-webpack')

var config = getConfig({
  in: 'test-index.js',
  out: 'dist',
  clearBeforeBuild: true
})

if (config.module && config.module.loaders) {
  config.module.loaders.forEach(function (loader) {
    if (loader.loader.indexOf('css-loader') > -1) {
      loader.loader = loader.loader.replace(
        'css-loader',
        'css-loader?modules&localIdentName=[local]'
      )
    }
  })
}

module.exports = config
