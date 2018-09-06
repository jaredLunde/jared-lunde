import React from 'react'
import {Hero as CurlsHero} from 'styled-curls'


export default class Hero extends React.Component {
  static defaultProps = {headerID: 'main-header', footerID: null}

  headerEl = null
  footerEl = null
  didMount = false

  componentDidMount () {
    this.forceUpdate()
    this.didMount = true
  }

  render () {
    let {children, headerID, footerID, trimFrom, minHeight, style, ...props} = this.props

    if (typeof document !== 'undefined') {
      this.headerEl = document.getElementById(this.props.headerID)
      this.footerEl = document.getElementById(this.props.footerID)
    }

    let trimHeight = [this.headerEl]

    if (this.footerEl) {
      trimHeight.push(this.footerEl)
    }

    return CurlsHero({
      key: JSON.stringify(this.didMount),
      p: '3',
      bg: 'transparent',
      trimHeight,
      'data-strict': true,
      ...props,
      children
    })
  }
}
