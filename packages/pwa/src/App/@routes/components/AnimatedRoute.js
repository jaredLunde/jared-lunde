import React from 'react'
import {AnimatedRoute} from 'react-router-transition'


export default function Route (props) {
  return <AnimatedRoute
    runOnMount
    atEnter={{offset: 1.382, opacity: 0}}
    atLeave={{offset: 0.8, opacity: 0}}
    atActive={{offset: 1, opacity: 1}}
    mapStyles={(styles) => {
      return {
        opacity: styles.opacity,
        transform: `scale(${styles.offset})`
      }
    }}
    {...props}
  />
}
