import React from 'react'
import {Row, Type, NavLink} from 'curls'
import {home} from '~/sitemap'


export default class Footer extends React.Component {
  render () {
    return (
      <Row p='3' bw='t1' id='main-footer'>
        <Type light>
          &copy;{(new Date()).getFullYear()}{" "}
          books
        </Type>
      </Row>
    )
  }
}
