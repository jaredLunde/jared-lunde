import React from 'react'
import {Type} from 'curls'
import Button from './Button'


export default React.forwardRef(
  function TypeButton ({typeSize, ...props}, ref) {
    let typeColor = 'white'

    if (props.outline === true) {
      typeColor = props.bg || 'primary'
    }

    if (props.typeColor !== void 0 && props.typeColor !== null) {
      typeColor = props.typeColor
    }
    delete props.typeColor

    const typeProps = {
      flex: true,
      row: true,
      align: 'center',
      color: typeColor,
      children: props.children
    }

    if (typeSize) {
      typeProps[typeSize] = true
    }

    return React.createElement(
      Button, {
        ref,
        type: 'button',
        ...props,
        children: React.createElement(Type, typeProps)
      }
    )
  }
)
