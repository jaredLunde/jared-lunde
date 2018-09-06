const instWebpack = require('@inst-app/webpack')
const path = require('path')
const webpack = require('webpack')
const defaults = require('./defaults')
const appPaths = require('../paths')


module.exports = instWebpack.createProduction({
  ...defaults,

  entry: {
    m: [path.join(appPaths.serverSrc, 'render.staging.js')]
  },

  output: {
    ...defaults.output,
    filename: 'render.js'
  }
})
