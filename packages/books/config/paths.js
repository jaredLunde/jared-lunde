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
  
  dist: join('dist'),
  modules: join('node_modules'),
  publicPath: {
    development: '/public/',
    staging: `https://${pkgJSON.inst.s3.staging}.s3.amazonaws.com/`,
    production: `https://${pkgJSON.inst.s3.production}.s3.amazonaws.com/`
  }
}
