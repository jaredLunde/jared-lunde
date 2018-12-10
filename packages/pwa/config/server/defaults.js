const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const defaults = require('../webpack.defaults')
const appPaths = require('../paths')


const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  ...defaults,

  name: 'server',
  target: 'lambda',
  rootImportSrc: appPaths.appSrc,

  entry: {
    m: [path.join(appPaths.serverSrc, 'render.js')]
  },

  output: {
    path: path.join(appPaths.dist, process.env.STAGE, 'server'),
    filename: 'render.js',
    libraryTarget: 'commonjs2',
    publicPath: appPaths.publicPath[process.env.STAGE]
  },

  externals: [
    'encoding',
    'express'
    // nodeExternals({modulesDir: '../../../node_modules', whitelist: [/web/,]})
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
      __SERVER__: JSON.stringify(true),
      __CLIENT__: JSON.stringify(false),
      __STAGE__: JSON.stringify(process.env.STAGE || 'development'),
      __DEV__: JSON.stringify(isDev)
    })
  ],

  optimization: {minimize: false}
}
