import createRenderer from '@inst-app/ssr/createRenderer'
import template from '@inst-app/basic-template'
import * as routes from '../App/@routes'
import App from '../App'
import HTML from './templates/app.tpl'
import robots from './templates/robots.staging.txt'


const render = template(HTML)

export default ({clientStats}) => createRenderer({
  render,
  clientStats,
  routes,
  robots,
  App
})
