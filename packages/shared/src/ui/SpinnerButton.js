import React from 'react'
import TypeButton from './TypeButton'
import {Spinner} from '@jaredlunde/curls-addons'


export default React.forwardRef(
  function SpinnerButton ({
    children,
    spinnerSize,
    bg,
    typeColor,
    spinnerColor,
    status,
    outline,
    ...props
  },
  ref
) {
    spinnerColor = spinnerColor
      ? spinnerColor
      : typeColor
        ? typeColor
        : outline
          ? (bg || 'primary')
          : 'white'

    const buttonProps = {
      typeColor,
      outline,
      ...props,
      children: status === 'loading'
        ? Spinner({size: spinnerSize || 16, color: spinnerColor})
        : children
    }

    if (bg) {
      buttonProps.bg = bg
    }

    buttonProps.ref = ref

    return React.createElement(TypeButton, buttonProps)
  }

)
