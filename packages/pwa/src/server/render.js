import createRenderer from '@inst-app/ssr/createRenderer'
import serverless from 'serverless-http'
import renderApp from './renderApp'

let clientStats
if (__STAGE__ !== 'development') {
  clientStats = require(`../../dist/${__STAGE__}/client/stats.json`)
}

const robots = (
  __STAGE__ !== 'production'
    ? require('./templates/robots.disallow.txt')
    : require('./templates/robots.txt')
)

const mainServerless = serverless(createRenderer({render: renderApp({clientStats}), robots}))

export const main = function (event, context) {
  // keeps the lambda function warm
  if (event.source === 'serverless-plugin-lambda-warmup') {
    console.log('Warming...')
    return
  }

  return mainServerless(event, context)
}

const PageCache = {}

const middleware = [
  function overwriteSend (req, res, next) {
    var send = res.send

    res.send = function (string) {
      const body = string instanceof Buffer ? string.toString() : string

      PageCache[req.url] = {
        body,
        statusCode: res.statusCode,
        headers: res.getHeaders()
      }

      send.call(this, body)
    }

    next()
  },
  function handleRequest (req, res, next) {
    let page = PageCache[req.url]

    if (page !== void 0) {
      res.set(page.headers)
      res.status(page.statusCode)
      res.send(page.body)
    } else {
      next()
    }
  }
]

export default ({clientStats}) => createRenderer({
  render: renderApp({clientStats}),
  robots,
  middleware: __STAGE__ === 'production' || __STAGE__ === 'staging' ? middleware : []
})
