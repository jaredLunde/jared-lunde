const webpack = require('webpack')
const path = require('path')
const appPaths = require('../paths')
const pkgJSON = require('../../package.json')
const defaults = require('../webpack.defaults')


module.exports = {
  ...defaults,

  name: 'client',

  rootImportSrc: appPaths.appSrc,
  entry: [path.join(appPaths.clientSrc, `render.${process.env.STAGE}.js`)],

  output: {
    path: path.join(appPaths.dist, process.env.STAGE, 'client'),
    filename: `js/${pkgJSON.name}.[hash].js`,
    chunkFilename: `js/${pkgJSON.name}.[chunkhash].js`,
    publicPath: appPaths.publicPath[process.env.STAGE]
  },

  plugins: [
    new webpack.DefinePlugin({
      __PLATFORM__: '"client"',
      __STAGE__: JSON.stringify(process.env.STAGE),
      __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
    })
  ]
}
