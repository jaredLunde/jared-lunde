const instWebpack = require('@inst-app/webpack')
const webpack = require('webpack')
const path = require('path')
const Jarvis = require('webpack-jarvis')
const findPkgJSON = require('find-package-json')
const pkgJSON = findPkgJSON(__dirname).next().value
const appPaths = require('./paths')
const defaults = require('./webpack.defaults')
const serverConfig = require('./server/defaults')


module.exports = instWebpack.createDevelopment({
  name: `${pkgJSON.name}-development`,
  rootImportSrc: appPaths.appSrc,

  entry: [path.join(appPaths.clientSrc, 'render.development')],

  output: {
    path: appPaths.devServerDist,
    filename: `${pkgJSON.name}-development.js`,
    chunkFilename: '${pkgJSON.name}-development.[chunkhash].js',
    publicPath: appPaths.publicDevelopmentPath
  },

  ...defaults,

  module: serverConfig.module,

  plugins: [
    new webpack.HotModuleReplacementPlugin({multiStep: true}),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify('server'),
      __STAGE__: JSON.stringify('development'),
      __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
    })
  ]
})
