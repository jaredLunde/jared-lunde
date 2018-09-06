import React, {unstable_Profiler as Profiler} from 'react'
import getDisplayName from 'react-display-name'


export default class Benchmark extends React.PureComponent {
  renders = 0
  time = 0

  constructor (props) {
    super(props)
    this.id = `${getDisplayName(props.children.type)}`
  }

  componentDidMount () {
    this.forceUpdate()
    this.renders++
  }

  componentDidUpdate () {
    if (this.props.n > this.renders) {
      this.renders++
      this.forceUpdate()
    }
    else {
      console.log(
        `[Profile] ${this.id}:`,
        (this.time / this.renders).toFixed(4)
      )
    }
  }

  record = (_, __, actualTime) => {
    if (this.renders < this.props.n) {
      this.time += actualTime
    }
  }

  render () {
    return (
      <Profiler id={this.id} onRender={this.record}>
        {this.props.children}
      </Profiler>
    )
  }
}
