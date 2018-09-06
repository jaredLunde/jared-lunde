import React from 'react'
import Helmet from 'react-helmet'
import {Type, Box} from 'styled-curls'
import {Hero, Button} from 'shared/ui'


function getExplanation (status) {
  switch (status) {
    case 404:
      return (
        <>
          We couldn't find what you<br/>
          were looking for.
        </>
      )
    case 403:
      return (
        <>
          You are not allowed to<br/>
          access this page.
        </>
      )
    case 401:
      return (
        <>
          Most requests are bad, but<br/>
          that one was wretched.
        </>
      )
    default:
      return (
        <>
          Something broke while trying<br/>
          to load this page.
        </>
      )
  }
}

export default function Error ({radar}) {
  let status, statusText

  if (radar !== void 0) {
    status = radar.endpoint.response.status
    statusText = radar.endpoint.response.statusText
  }
  else {
    status = 404
    statusText = 'Not found'
  }

  return (
    <>
      <Helmet>
        <title>{String(status)}: {String(statusText)}</title>
        <meta name='robots' content='noindex'/>
      </Helmet>

      <Hero p='3'>
        {status !== 200 && (
          <Type xl regular center m='b2'>
            {status}: {statusText}
          </Type>
        )}

        <Type light lg center m='b4' css='line-height: 1.1;'>
          {getExplanation(status)}
        </Type>

        {radar !== void 0
          && radar.endpoint.response.status !== 404
          && Button({onClick: radar.refresh, children: 'Retry'})}
      </Hero>
    </>
  )
}
