import React from 'react'
import {Router as ReactRouter, Switch, Route} from '@inst-app/router'
import Lazy from '@inst-app/ssr/lazy'
import {ThemeProvider, browserResets} from 'styled-curls'
import Helmet from 'react-helmet'
import {injectGlobal} from 'emotion'
import emptyObj from 'empty/object'
import theme from '~/theme'
import {browserHistory, assets} from '~/config'
import {Header, Footer} from '~/ui'
import * as routes from '~/@routes'
import Home from '~/pages/Home'
import favicon16 from '~/public/images/favicon-16x16.png'
import favicon32 from '~/public/images/favicon-32x32.png'
import favicon96 from '~/public/images/favicon-96x96.png'
import favicon from '~/public/images/favicon.ico'

// injects global CSS into the document
injectGlobal`
  ${browserResets};

  html {
    overflow-x: hidden;
  }

  body {
    quotes: "“" "”";
    background-color: ${theme.colors.darkerGrey};
  }

  svg:not(:root) {
    display: inline-block;
  }

  [data-autosize=true] {
    contain: content;
  }

  [data-autopaint=true] {
    contain: layout style;
  }

  [data-strict=true] {
    contain: strict;
  }

  @font-face {
    font-family: "CentimaMono";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${require('~/public/fonts/CentimaMono-Bold.woff2')}) format("woff2"),
         url(${require('~/public/fonts/CentimaMono-Bold.woff')}) format("woff");
  }

  @font-face {
    font-family: "SF";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${require('~/public/fonts/SF-UI-Display-Heavy.woff2')}) format("woff2"),
         url(${require('~/public/fonts/SF-UI-Display-Heavy.woff')}) format("woff");
  }

  @font-face {
    font-family: "SF";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${require('~/public/fonts/SF-UI-Display-Regular.woff2')}) format("woff2"),
         url(${require('~/public/fonts/SF-UI-Display-Regular.woff')}) format("woff");
  }
`

export default function App (props = emptyObj) {
  // creates the router context
  const Router = props.router || ReactRouter
  let {history} = props

  if (history === void 0) {
    history = browserHistory
  }

  return (
    <Lazy.Provider chunkCache={props.chunkCache}>
      <ThemeProvider theme={theme}>
        <Router history={history} location={props.location} context={props.context}>
            <Route children={
              ({location}) => {
                if (typeof window !== 'undefined') {
                  window.scrollTo(0, 0)
                }

                return (
                  <>
                    <Helmet>
                      <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={favicon16}
                      />
                      <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={favicon32}
                      />
                      <link
                        rel="icon"
                        type="image/png"
                        sizes="96x96"
                        href={favicon96}
                      />
                      <link
                        rel="shortcut icon"
                        type="image/x-icon"
                        href={favicon}
                      />
                      <link
                        rel="icon"
                        type="image/x-icon"
                        href={favicon}
                      />
                    </Helmet>

                    <Switch location={location}>
                      {Object.keys(routes).map((key, x) => routes[key].route)}
                    </Switch>
                  </>
                )
              }
            }/>
          </Router>
      </ThemeProvider>
    </Lazy.Provider>
  )
}
