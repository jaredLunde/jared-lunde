import React from 'react'
import {Provider as BrokerProvider} from 'react-broker'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import {css, ThemeProvider, browserResets, prettyText, containmentAttrs} from 'curls'
import {Route, Switch} from 'react-router-dom'
import {SkipNavLink} from '~/ui'
import theme from '~/theme'
import * as pages from '~/pages'


const globalStyles = [
  browserResets,
  prettyText,
  containmentAttrs,
  css`
    html, body {
      background: ${theme.colors.background};
      font-size: ${theme.text.scale.sm}rem;
      font-family: ${theme.text.families.primary};
      color: ${theme.colors.primaryText};
    }
    
    a {
      color: ${theme.colors.impactText};
    }
      
    @font-face {
      font-family: "Brand";
      font-style: normal;
      font-weight: 700;
      src: url(${require('~/public/fonts/CerebriSans-Heavy.woff2')}) format("woff2"),
           url(${require('~/public/fonts/CerebriSans-Heavy.woff')}) format("woff");
    }
    
    @font-face {
      font-family: "Brand";
      font-style: normal;
      font-weight: 300;
      src: url(${require('~/public/fonts/CerebriSans-Book.woff2')}) format("woff2"),
           url(${require('~/public/fonts/CerebriSans-Book.woff')}) format("woff");
    }
  `
]

const faviconLinks = {
  'apple-touch-icon': [
    {
      sizes: '120x120',
      href: require(`~/public/images/touch-120.png`).src,
    },
    {
      sizes: '152x152',
      href: require(`~/public/images/touch-152.png`).src,
    },
    {
      sizes: '167x167',
      href: require(`~/public/images/touch-167.png`).src,
    },
    {
      sizes: '180x180',
      href: require(`~/public/images/touch-180.png`).src,
    },
  ],
  'apple-touch-startup-image': [
    {
      media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-640x1136.png`).src,
    },
    {
      media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-750x1294.png`).src,
    },
    {
      media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: require(`~/public/images/startup-1242x2148.png`).src,
    },
    {
      media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
      href: require(`~/public/images/startup-1125x2436.png`).src,
    },
    {
      media: '(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-2048x2732.png`).src,
    },
    {
      media: '(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)',
      href: require(`~/public/images/startup-640x1136.png`).src,
    },
  ],
  icon: [
    {
      type: 'image/png',
      sizes: '16x16',
      href: require(`~/public/images/favicon-16.png`).src,
    },
    {
      type: 'image/png',
      sizes: '32x32',
      href: require(`~/public/images/favicon-32.png`).src,
    },
    {
      type: 'image/png',
      sizes: '96x96',
      href: require(`~/public/images/favicon-96.png`).src,
    },
  ],
}
const faviconMeta = {
  'msapplication-TileColor': [{content: theme.colors.secondary}],
  'msapplication-TileImage': [{content: require(`~/public/images/metro-310.png`).src}]
}

const Document = ({location}) => (
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
      <meta name="theme-color" content={theme.colors.background}/>
      {process.env.PUBLIC_PATH.startsWith('http') &&
        <link rel="dns-prefetch preconnect" href={process.env.PUBLIC_PATH} crossOrigin/>}

      {Object.keys(faviconLinks).map(
        rel => faviconLinks[rel].map(p => <link rel={rel} {...p}/>),
      )}

      {Object.keys(faviconMeta).map(
        name => faviconMeta[name].map(p => <meta name={name} {...p}/>),
      )}
    </Helmet>

    <SkipNavLink/>

    <Switch location={location}>
      {Object.values(pages)}
    </Switch>

    <div id='portals'/>
  </>
)

export default ({helmetContext = {}, chunkCache}) => (
  <HelmetProvider context={helmetContext}>
    <ThemeProvider theme={theme} globalStyles={globalStyles}>
      <BrokerProvider chunkCache={chunkCache}>
        <Route children={({location}) => {
          if (typeof window !== 'undefined') window.scrollTo(0, 0)
          return <Document location={location}/>
        }}/>
      </BrokerProvider>
    </ThemeProvider>
  </HelmetProvider>
)