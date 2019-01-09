import React from 'react'
//const defaultImg = require('../public/images/twitter-card.png')


export default function getMetaImage (url/* = defaultImg*/) {
  return [
    <meta property="og:image" content={url} key='0'/>,
    <meta name="twitter:image" content={url} key='1'/>
  ]
}
