import React from 'react'
import Broker from 'react-broker'
import Helmet from 'react-helmet'
import {Router as ReactRouter, Route, Switch} from '@inst-app/router'
import {ThemeProvider, browserResets} from 'curls'
import {injectGlobal} from 'emotion'
import {assets} from '~/config'
import theme from '~/theme'
import {Header, Footer} from '~/ui'
import * as routes from '~/@routes'
// public file assets that need to be bundled on each page
const pwaJSON = require(`~/public/json/pwa.${__STAGE__}.json`)

// injects global CSS into the document
injectGlobal`
  ${browserResets};

  body {
    quotes: "“" "”";
    background-color: white;
  }

  svg:not(:root) {
    display: inline-block;
  }

  [data-strict=true] {
    contain: strict;
  }

  [data-autosize=true] {
    contain: content;
  }

  [data-autopaint=true] {
    contain: layout style;
  }
  
  @font-face {
    font-family: "Geomanist";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${require('~/public/fonts/geomanist-black-webfont.woff2')}) format("woff2"),
         url(${require('~/public/fonts/geomanist-black-webfont.woff')}) format("woff"),
         url(${require('~/public/fonts/geomanist-black-webfont.eot')}) format("eot"),
         url(${require('~/public/fonts/geomanist-black-webfont.ttf')}) format("ttf");
  }

  @font-face {
    font-family: "Geomanist";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${require('~/public/fonts/geomanist-light-webfont.woff2')}) format("woff2"),
         url(${require('~/public/fonts/geomanist-light-webfont.woff')}) format("woff"),
         url(${require('~/public/fonts/geomanist-light-webfont.eot')}) format("eot"),
         url(${require('~/public/fonts/geomanist-light-webfont.ttf')}) format("ttf");
  }
`

function Document ({location}) {
  return (
    <>
      <Helmet>
        <html lang="en"/>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black"
        />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0"
        />
        <meta name="theme-color" content='#000'/>
        {assets.path.startsWith('http') && (
          <>
            <link rel="dns-prefetch" href={assets.path}/>
            <link rel="preconnect" href={assets.path} crossorigin/>
          </>
        )}
        <link rel='manifest' href={pwaJSON.toString()}/>
      </Helmet>

      {/*<Header/>*/}
      <Header/>
      <Switch location={location}>
        {Object.keys(routes).map((key, x) => routes[key].route)}
      </Switch>

      <Footer/>
      <div id='portals'/>
    </>
  )
}

export default function App ({
  chunkCache,
  location,
  routerContext,
  history,
  userAgent,
  clientStats,
  device,
  env,
  stage,
  router = ReactRouter
}) {
  const Router = router

  return (
    <Broker.Provider chunkCache={chunkCache}>
      <ThemeProvider theme={theme}>
        <Router
          history={history}
          location={location}
          context={routerContext}
        >
          <Route children={({location}) => {
            if (typeof window !== 'undefined') {
              window.scrollTo(0, 0)
            }

            return <Document location={location}/>
          }}/>
        </Router>
      </ThemeProvider>
    </Broker.Provider>
  )
}
