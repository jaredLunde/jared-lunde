import React from 'react'
import {Row, Type, NavLink} from 'curls'
import {Content} from '~/ui'
import {home} from '~/sitemap'


export default class Footer extends React.Component {
  render () {
    return (
      <Row p='x4 y5' id='main-footer' bg='white'>
        <Content tight>
          <Type light>
            &copy;{(new Date()).getFullYear()}{" "}
            recipes
          </Type>
        </Content>
      </Row>
    )
  }
}
