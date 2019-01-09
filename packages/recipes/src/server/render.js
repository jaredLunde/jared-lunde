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

export default ({clientStats}) => createRenderer({
  render: renderApp({clientStats}), robots
})
