import {Type} from 'styled-curls'
import pure from 'react-purity'
import Button from './Button'


export default pure(
  function TypeButton ({typeSize, ...props}) {
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

    return Button({type: 'button', ...props, children: Type(typeProps)})
  }
)
