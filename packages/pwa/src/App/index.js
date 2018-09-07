import React from 'react'
import Lazy from '@inst-app/ssr/lazy'
import {ThemeProvider, browserResets} from 'styled-curls'
import {injectGlobal} from 'emotion'
import emptyObj from 'empty/object'
import theme from '~/theme'
import {browserHistory, assets} from '~/config'
import {Header, Footer} from '~/ui'
// import * as routes from '~/@routes'
import Home from '~/pages/Home'


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
    font-family: "CentimaMono";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${assets.resolveFont('CentimaMono-Bold.woff2')}) format("woff2"),
         url(${assets.resolveFont('CentimaMono-Bold.woff')}) format("woff");
  }

  @font-face {
    font-family: "CentimaMono";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${assets.resolveFont('CentimaMono.woff2')}) format("woff2"),
         url(${assets.resolveFont('CentimaMono.woff')}) format("woff");
  }

  @font-face {
    font-family: "CentimaMono";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url(${assets.resolveFont('CentimaMono-Light.woff2')}) format("woff2"),
         url(${assets.resolveFont('CentimaMono-Light.woff')}) format("woff");
  }
`

export default function App (props = emptyObj) {
  // creates the router context
  /**
  const Router = props.router || ReactRouter
  let {history} = props

  if (history === void 0) {
    history = browserHistory
  }
  */
  return (
    <Lazy.Provider chunkCache={props.chunkCache}>
      <ThemeProvider theme={theme}>
        <>
          <Header/>
          <Home/>
        </>
      </ThemeProvider>
    </Lazy.Provider>
  )
}
/**
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
        <Router
          history={history}
          location={props.location}
          context={props.context}
        >
          <Route children={
            ({location}) => {
              if (typeof window !== 'undefined') {
                window.scrollTo(0, 0)
              }

              return (
                <>
                  <Header/>
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
*/
