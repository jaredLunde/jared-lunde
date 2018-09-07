const instWebpack = require('@inst-app/webpack')
const path = require('path')
const webpack = require('webpack')
const pkgJSON = require('../../package.json')
const appPaths = require('../paths')
const defaults = require('./defaults')


module.exports = instWebpack.createDevelopment({
  ...defaults,

  entry: [path.join(appPaths.clientSrc, 'render.development.js')],

  output: {
    ...defaults.output,
    path: path.join(appPaths.devServerDist, 'client'),
    filename: `js/${pkgJSON.name}.development.js`,
    chunkFilename: `js/${pkgJSON.name}.development.[chunkhash].js`,
    publicPath: appPaths.publicDevelopmentPath
  },

  plugins: [
    ...defaults.plugins
  ]
})
