import {Icon} from '@jaredlunde/curls-addons'
import pure from 'react-purity'
import Button from './Button'


export default pure(
  function IconButton ({name, size, color, ...props}) {
    return Button({
      bg: 'transparent',
      bw: 0,
      ...props,
      children: React.createElement(Icon, {name, size, color})
    })
  }
)
