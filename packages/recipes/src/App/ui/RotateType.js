import React from 'react'
import PropTypes from 'prop-types'
import {requestTimeout, clearRequestTimeout} from '@render-props/utils'
import posed from 'react-pose'
import {Type} from 'curls'

export default class RotateType extends React.PureComponent {
  static propTypes = {

  }

  static defaultProps = {
    as: Type,
    delay: 10
  }

  constructor (props) {
    super(props)
    this.state = {value: props.children, position: 'bottom'}
    this.timeout = requestTimeout(
      () => {
        this.setState({position: 'top'})
        this.timeout = requestTimeout(
          () => this.setState({position: 'bottom'}),
          props.delay * 300
        )
      },
      props.delay
    )
    this.posed = posed(props.as)({
      bottom: {y: 16, opacity: 0},
      top: {y: 0, opacity: 1}
    })
  }

  componentWillUnmount () {
    clearRequestTimeout(this.timeout)
  }

  render () {
    const {as, ...props} = this.props
    console.log(this.state.position)
    return React.createElement(
      this.posed,
      {...props, pose: this.state.position},
      this.state.value
    )
  }
}