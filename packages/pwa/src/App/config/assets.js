import {__STAGE__} from 'shared/config'
import paths from '../../../config/paths'
import resolveURL from 'url-resolve-browser'


let resolver = resolveURL

if (__STAGE__ === 'development') {
  resolver = require('path').join
}


export let path = paths.publicPath.development

switch (__STAGE__) {
  case 'staging':    path = paths.publicPath.staging
  break;
  case 'production': path = paths.publicPath.production
}

if (path[path.length - 1] === '/') {
  path = path.slice(0, -1)
}


export const resolve = loc => resolver(`${path}/`, loc)
export const resolveImg = key => resolve(`images/${key}`)
export const resolveFont = key => resolve(`fonts/${key}`)
