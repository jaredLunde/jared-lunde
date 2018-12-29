const path = require('path')
const appPaths = require('./paths')


function createAliases (inherits) {
  const aliases = {}

  for (let inherit of inherits) {
    aliases[`${path.basename(path.dirname(inherit))}`] = inherit
  }

  return aliases
}

module.exports = {
  resolveLoader: {
    modules: [appPaths.modules]
  },

  resolve: {
    modules: [appPaths.modules],
    
    alias: createAliases(appPaths.inheritsSrc)
  },
  
  inst: {
    include: [
      appPaths.appSrc,
      ...appPaths.inheritsSrc,
      appPaths.clientSrc,
      appPaths.serverSrc,
      appPaths.join('config')
    ]
  },
}
