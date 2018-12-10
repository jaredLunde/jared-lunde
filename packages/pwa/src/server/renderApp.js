import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from '@inst-app/router'
import Broker from 'react-broker'
import {renderStylesToString} from 'emotion-server'
import {renderPortalsToString} from 'curls/server'
import Helmet from 'react-helmet'
import App from '../App'
import {minifyHTML} from './utils'


export default ({clientStats}) => async function render ({
  // express
  req,
  res,
  next,
  // environments
  device,
  env,
  stage
}) {
  // tracks redirections and status changes in the Router
  const routerContext = {}
  // keeps track of lazy chunks used by the current page
  const chunkCache = Broker.createChunkCache()
  // creates the App in React
  const app = React.createElement(
    App,
    {
      chunkCache,
      router: StaticRouter,
      location: req.url,
      routerContext: routerContext,
      userAgent: req.headers['user-agent'],
      clientStats,
      device,
      env,
      stage
    }
  )
  // preloads the async components and when done renders the app string
  await Broker.loadAll(app)
  // sets the status from the router context to the response
  if (routerContext.status) {
    res.status(routerContext.status)
  }
  // somewhere a `<Redirect>` was rendered
  if (routerContext.url) {
    res.redirect(301, routerContext.url)
  }
  // the string-rendered application
  const page = renderStylesToString(
    renderPortalsToString(
      ReactDOMServer.renderToString(app)
    )
  )
  // renders the Helmet attributes
  const helmet = Helmet.renderStatic()
  // returns the document
  let doc = `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes}>
      <head>
        <!-- Page Title -->
        ${helmet.title}
        <!-- Helmet meta -->
        ${helmet.meta}
        <!-- Helmet links -->
        ${helmet.link}
        <!-- Helmet styles -->
        ${helmet.style}
        <!-- Bundle scripts -->
        ${chunkCache.getChunkScripts(clientStats)}
        <!-- Helmet scripts -->
        ${helmet.script}
      </head>
      <body ${helmet.bodyAttributes}>
        <noscript>
          <div style="font-family: sans-serif; padding: 2rem; text-align: center;">
            Javascript must be enabled in order to view this website
          </div>

        </noscript>
        <div id="⚛️">${page}</div>
      </body>
    </html>
  `

  return doc
}
