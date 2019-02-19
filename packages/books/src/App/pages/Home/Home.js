import React from 'react'
import Helmet from 'react-helmet'
import {Hero, Type} from 'curls'


export default class Home extends React.PureComponent {
  render () {
    return (
      <Hero>
        <Helmet>
          <title>Hello World</title>
        </Helmet>
        <Type xxl center ultraLight w='100%' d='block'>
          Hello world!
        </Type>
      </Hero>
    )
  }
}
