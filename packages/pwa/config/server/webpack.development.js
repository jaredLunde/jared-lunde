const instWebpack = require('@inst-app/webpack')
const defaults = require('./defaults')
let createConfig = instWebpack.createDevelopment


if (process.env.NODE_ENV === 'production') {
  createConfig = instWebpack.createProduction
}

module.exports = createConfig(defaults, {target: 'node'})
