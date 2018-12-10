import React from 'react'
import {Router as ReactRouter, Switch, Route} from '@inst-app/router'
import Lazy from 'react-broker'
import {ThemeProvider, browserResets} from 'curls'
import Helmet from 'react-helmet'
import {injectGlobal} from 'emotion'
import emptyObj from 'empty/object'
import theme from '~/theme'
import {browserHistory, assets} from '~/config'
import {Header, Footer} from '~/ui'
import * as routes from '~/@routes'


const pwaJSON = require(`~/public/json/pwa.${__STAGE__}.json`)
const faviconLinks = {
  'apple-touch-icon': [
    {
      sizes: '120x120',
      href: require(`~/public/images/touch-120.png`)
    },
    {
      sizes: '152x152',
      href: require(`~/public/images/touch-152.png`)
    },
    {
      sizes: '167x167',
      href: require(`~/public/images/touch-167.png`)
    },
    {
      sizes: '180x180',
      href: require(`~/public/images/touch-180.png`)
    }
  ],
  'apple-touch-startup-image': [
    {
      media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-640x1136.png`)
    },
    {
      media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-750x1294.png`)
    },
    {
      media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: require(`~/public/images/startup-1242x2148.png`)
    },
    {
      media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: require(`~/public/images/startup-1125x2436.png`)
    },
    {
      media: '(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-2048x2732.png`)
    },
    {
      media: '(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-640x1136.png`)
    },
  ],
  'shortcut icon': [
    {
      type: 'image/x-icon',
      sizes: '16x16',
      href: require(`~/public/images/favicon.ico`)
    },
  ],
  icon: [
    {
      type: 'image/x-icon',
      sizes: '16x16',
      href: require(`~/public/images/favicon.ico`)
    },
    {
      type: 'image/png',
      sizes: '16x16',
      href: require(`~/public/images/favicon-16.png`)
    },
    {
      type: 'image/png',
      sizes: '32x32',
      href: require(`~/public/images/favicon-32.png`)
    },
    {
      type: 'image/png',
      sizes: '96x96',
      href: require(`~/public/images/favicon-96.png`)
    }
  ]
}
const faviconMeta = {
  'msapplication-TileColor': [{content: theme.colors.blue}],
  'msapplication-TileImage': [{content: require(`~/public/images/metro-310.png`)}],
  'msapplication-config': [{content: require(`~/public/images/browserconfig.xml`)}]
}
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
    src: url(${require('~/public/fonts/CentimaMono-Bold.woff2')}) format("woff2"),
         url(${require('~/public/fonts/CentimaMono-Bold.woff')}) format("woff");
  }

  @font-face {
    font-family: "InterUI";
    font-style: normal;
    font-weight: 700;
    src: url(${require('~/public/fonts/Inter-UI-Black.woff2')}) format("woff2"),
         url(${require('~/public/fonts/Inter-UI-Black.woff')}) format("woff");
  }

  @font-face {
    font-family: "InterUI";
    font-style: normal;
    font-weight: 400;
    src: url(${require('~/public/fonts/Inter-UI-Regular.woff2')}) format("woff2"),
         url(${require('~/public/fonts/Inter-UI-Regular.woff')}) format("woff");
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
                      <meta
                        name="google-site-verification"
                        content="0L8RZ2nrOELypp4uek73-wI_MBwoVSahGmSKiPh6xpg"
                      />
                      <meta name="apple-mobile-web-app-title" content="Jared Lunde"/>
                      <meta name="theme-color" content={theme.colors.grey}/>

                      {assets.path.startsWith('http') && (
                        <>
                          <link rel="dns-prefetch" href={assets.path}/>
                          <link rel="preconnect" href={assets.path} crossorigin/>
                        </>
                      )}

                      {Object.keys(faviconLinks).map(
                        rel => faviconLinks[rel].map(p => <link rel={rel} {...p}/>)
                      )}

                      {Object.keys(faviconMeta).map(
                        name => faviconMeta[name].map(p => <meta name={name} {...p}/>)
                      )}

                      <link rel='manifest' href={pwaJSON.toString()}/>
                    </Helmet>

                    <div id='portals'/>

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
