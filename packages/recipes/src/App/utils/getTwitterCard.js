import React from 'react'


export default function getTwitterCard (content = 'summary_large_image'/*player, summary*/) {
  return [
    <meta name="twitter:card" content={content} key='0'/>,
    <meta name="twitter:site" content='@jaredLunde' key='1'/>,
    <meta name="twitter:creator" content='@jaredLunde' key='2'/>,
    <meta name="twitter:domain" content='https://recipes.jaredlunde.com' key='3'/>,
  ]
}
