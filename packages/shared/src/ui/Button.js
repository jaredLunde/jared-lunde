import emptyObj from 'empty/object'
import {Button as CurlsButton, Type} from 'styled-curls'


export default function Button ({outline = false, ...props}) {
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

  return CurlsButton({
    sm: true,
    ...outlineProps,
    ...props
  })
}
