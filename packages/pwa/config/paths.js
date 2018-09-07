const path = require('path')
const pkgJSON = require('../package.json')


const root = path.resolve(path.basename(__filename), '../')
const join = (...p) => path.join(root, ...p)

module.exports = {
  root,
  join,
  src: join('src'),
  appSrc: join('src/App'),
  clientSrc: join('src/client'),
  serverSrc: join('src/server'),

  inheritsSrc: join('../shared/src'),

  clientDist: join('dist/client'),
  serverDist: join('dist/server'),
  devServerDist: join('dist/dev-server'),
  modules: join('node_modules'),

  publicDevelopmentPath: '/public/',
  publicStagingPath: `https://${pkgJSON.inst.s3.staging}.s3.amazonaws.com/`,
  publicProductionPath: `https://cdn.jaredlunde.com/`,
}
