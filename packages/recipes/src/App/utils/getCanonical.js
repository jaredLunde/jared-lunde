import React from 'react'
import {app} from '../config'


export default function getCanonical (url) {
  url = app.resolve(url)

  return [
    <link rel='canonical' href={url} key='0'/>,
    <meta property='og:url' content={url} key='1'/>,
    <meta name='twitter:url' content={url} key='2'/>,
  ]
}
