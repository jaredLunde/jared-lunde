import React from 'react'
import {Icon} from '@jaredlunde/curls-addons'
import Button from './Button'


export default React.memo(
  function IconButton ({name, size, color, ...props}) {
    return Button({
      bg: 'transparent',
      bw: 0,
      ...props,
      children: React.createElement(Icon, {name, size, color})
    })
  }
)
