import createRenderer from '@inst-app/ssr/createRenderer'
import {minifyHTML} from '@inst-app/ssr/utils'
import template from '@inst-app/basic-template'
import serverless from 'serverless-http'
import clientStats from '../../dist/client/stats.production.json'
import * as routes from '../App/@routes'
import App from '../App'
import HTML from './templates/app.tpl'
import robots from './templates/robots.production.txt'


const render = template(minifyHTML(HTML))
const PageCache = new Map()

const middleware = [
  function overwriteSend (req, res, next) {
    var send = res.send

    res.send = function (string) {
      const body = string instanceof Buffer ? string.toString() : string

      PageCache.set(req.url, {
        body,
        statusCode: res.statusCode,
        headers: res.getHeaders()
      })

      send.call(this, body)
    }

    next()
  },
  function handleRequest (req, res, next) {
    let page = PageCache.get(req.url)

    if (page !== void 0) {
      res.set(page.headers)
      res.status(page.statusCode)
      res.send(page.body)
    } else {
      next()
    }
  }
]

export const main = serverless(
  createRenderer({
    render,
    middleware,
    clientStats,
    routes,
    robots,
    App
  })
)
