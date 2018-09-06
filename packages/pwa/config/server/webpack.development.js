const instWebpack = require('@inst-app/webpack')
const path = require('path')
const defaults = require('./defaults')
const appPaths = require('../paths')


module.exports = instWebpack.createDevelopment({
  ...defaults,
  target: 'node',

  entry: {
    m: [path.join(appPaths.serverSrc, 'render.development.js')]
  },

  output: {
    ...defaults.output,
    path: path.join(appPaths.devServerDist, 'server'),
    filename: 'render.development.js'
  }
})
