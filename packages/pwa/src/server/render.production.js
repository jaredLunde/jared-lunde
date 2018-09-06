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

export const main = serverless(
  createRenderer({
    render,
    clientStats,
    routes,
    robots,
    App
  })
)
