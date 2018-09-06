const appPaths = require('./paths')


module.exports = {
  resolveLoader: {
    modules: [appPaths.modules]
  },

  resolve: {
    modules: [appPaths.modules],

    alias: {
      shared: appPaths.inheritsSrc,
    }

  },

  inst: {
    include: [
      appPaths.appSrc,
      appPaths.inheritsSrc,
      appPaths.clientSrc,
      appPaths.serverSrc,
    ]
  }
}
