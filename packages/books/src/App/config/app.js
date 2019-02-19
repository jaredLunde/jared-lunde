const resolveURL = typeof document !== 'undefined'
  ? require('resolve-url')
  : require('url').resolve


export let hostname = '127.0.0.1:3000'
export let scheme = 'http'

switch (__STAGE__) {
  case 'staging':
    hostname = 'staging-books.jaredlunde.com'
    scheme = 'https'
    break;
  case 'production':
    hostname = 'books.jaredlunde.com'
    scheme = 'https'
}

export const origin = `${scheme}://${hostname}`
export const resolve = path => resolveURL(origin, path)