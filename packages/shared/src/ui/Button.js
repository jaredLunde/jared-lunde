import React from 'react'
import emptyObj from 'empty/object'
import {Button as CurlsButton, Type} from 'curls'


export default React.forwardRef(
  function Button ({outline = false, ...props}, ref) {
    let outlineProps = emptyObj
    let bgColor = 'white'

    if (outline === true) {
      bgColor = props.bg || 'primary'
      props.bg = 'transparent'
      delete props.bc
      delete props.bw

      outlineProps = {
        bw: 2,
        bc: bgColor
      }
    }

    return <CurlsButton sm {...outlineProps} ref={ref} {...props}/>
  }

)
