import React from 'react'
import {NavBar, NavLink} from 'curls'
import {home} from '~/sitemap'


export default class Header extends React.Component {
  render () {
    return (
      <NavBar bw='b1' id='main-header'>
        <NavLink light lg to={home()} p='3' color='grey'>
          books
        </NavLink>
      </NavBar>
    )
  }
}
