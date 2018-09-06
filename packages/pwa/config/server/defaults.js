const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const defaults = require('../webpack.defaults')
const appPaths = require('../paths')


module.exports = {
  name: 'server',
  target: 'lambda',
  rootImportSrc: appPaths.appSrc,

  output: {
    path: appPaths.serverDist,
    libraryTarget: 'commonjs2',
  },

  ...defaults,

  externals: [
    'encoding',
    'express'
    /*
    nodeExternals({
      modulesDir: '../../../node_modules',
      whitelist: [
        /build/,
        /pwa/,
        /web/,
        /panel/,
        /react-universal-component/,
        /babel-plugin-universal-import/
      ]
    })
    */
  ],

  module: {
    rules: [
      {
        test: /\.html|\.txt|\.tpl/,
        loaders: ['raw']
      }
    ]
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    new webpack.DefinePlugin({
      __PLATFORM__: JSON.stringify('server'),
      __STAGE__: JSON.stringify(process.env.STAGE),
      __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
    })
  ],

  optimization: {minimize: false}
}
