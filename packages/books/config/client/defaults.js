const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const appPaths = require('../paths')
const pkgJSON = require('../../package.json')
const defaults = require('../webpack.defaults')


const isDev = process.env.NODE_ENV === 'development'

module.exports = merge(defaults, {
  name: 'client',

  rootImportSrc: appPaths.appSrc,
  entry: [path.join(appPaths.clientSrc, 'render.js')],

  output: {
    path: path.join(appPaths.dist, process.env.STAGE, 'client'),
    filename: `js/${pkgJSON.name}.[hash].js`,
    chunkFilename: `js/${pkgJSON.name}.[chunkhash].js`,
    publicPath: appPaths.publicPath[process.env.STAGE]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: JSON.stringify(false),
      __CLIENT__: JSON.stringify(true),
      __STAGE__: JSON.stringify(process.env.STAGE),
      __DEV__: JSON.stringify(isDev)
    })
  ]
})