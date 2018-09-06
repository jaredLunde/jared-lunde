const webpack = require('webpack')
const path = require('path')
const appPaths = require('../paths')
const defaults = require('../webpack.defaults')


module.exports = {
  name: 'client',

  rootImportSrc: appPaths.appSrc,

  output: {
    path: appPaths.clientDist,
  },

  ...defaults,

  plugins: [
    new webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify('client'),
      __STAGE__: JSON.stringify(process.env.STAGE),
      __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
    })
  ]
}
