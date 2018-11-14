import React from 'react'
import {AnimatedRoute} from 'react-router-transition'


export default function Route (props) {
  return <AnimatedRoute
    runOnMount
    atEnter={{opacity: 0.382}}
    atLeave={{opacity: 0.382}}
    atActive={{opacity: 1}}
    mapStyles={(styles) => {
      return {
        opacity: styles.opacity,
      }
    }}
    {...props}
  />
}
