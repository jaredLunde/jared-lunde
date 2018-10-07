import createRenderer from '@inst-app/ssr/createRenderer'
import {minifyHTML} from '@inst-app/ssr/utils'
import template from '@inst-app/basic-template'
import serverless from 'serverless-http'
import clientStats from '../../dist/staging/client/stats.json'
import * as routes from '../App/@routes'
import App from '../App'
import robots from './templates/robots.disallow.txt'
import HTML from './templates/app.tpl'


const render = template(minifyHTML(HTML))

export const main = serverless(
  createRenderer({
    render,
    clientStats,
    routes,
    robots,
    App
  })
)
