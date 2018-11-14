import React from 'react'
import Helmet from 'react-helmet'
import {Type, Box} from 'curls'
import {Hero, Button} from 'shared/ui'


function getExplanation (status) {
  switch (status) {
    case 404:
      return (
        <>
          Huh, where'd that page go?
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

export default function Error () {
  const status = 404
  const statusText = 'Not found'

  return (
    <>
      <Helmet>
        <title>{String(status)}: {String(statusText)}</title>
        <meta name='robots' content='noindex'/>
      </Helmet>

      <Hero p='3'>
        {status !== 200 && (
          <Type xl bold center>
            {status}: {statusText}
          </Type>
        )}

        <Type
          md
          light
          center
          css='line-height: 1.1;'
          face='secondary'
        >
          {getExplanation(status)}
        </Type>
      </Hero>
    </>
  )
}
