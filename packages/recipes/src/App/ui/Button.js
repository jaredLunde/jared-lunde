import React from 'react'
import emptyObj from 'empty/object'
import {withRouter} from 'react-router-dom'
import memoize from 'memoize-two-args'
import {Icon, Spinner} from '@jaredlunde/curls-addons'
import {Button as CurlsButton, Type} from 'curls'


const Button = React.memo(
  React.forwardRef(
    function Button ({outline = false, ...props}, ref) {
      let outlineProps = emptyObj
      let bgColor = 'secondaryText'

      if (outline === true) {
        bgColor = props.bg || bgColor
        props.bg = 'transparent'
        delete props.bc
        delete props.bw

        outlineProps = {
          bw: 1,
          sh: false,
          bc: bgColor
        }
      }

      return <CurlsButton {...outlineProps} ref={ref} {...props}/>
    }
  )
)

export default Button


export const TypeButton = React.forwardRef(
  function TypeButton (
    {typeSize = 'sm', typeWeight = 'ultraHeavy', face = 'primary', ...props},
    ref
  ) {
    let typeColor = 'secondaryText'

    if (props.outline === true) {
      typeColor = props.bg || typeColor
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
      face,
      children: props.children
    }

    if (typeSize) {
      typeProps[typeSize] = true
    }

    if (typeWeight) {
      typeProps[typeWeight] = true
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

// necessary for keeping TypeButton purity
const getOnClick = memoize(
  function (to, push) {
    return () => push(to)
  },
  Map
)


export const LinkButton = withRouter(
  function LinkButton ({to, history, staticContext, match, location, ...props}) {
    props.onClick = getOnClick(to, history.push)
    return React.createElement(TypeButton, props)
  }
)

export const IconButton = React.memo(
  function IconButton ({name, size, color, ...props}) {
    return <Button
      bg='transparent'
      bw='0'
      sh='0'
      {...props}
      children={<Icon name={name} color={color} size={size}/>}
    />
  }
)

export const SpinnerButton = React.forwardRef(
  function SpinnerButton (
    {
      children,
      spinnerSize,
      bg,
      typeColor,
      spinnerColor,
      loading,
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
          ? (bg || 'primaryText')
          : 'white'

    const buttonProps = {
      typeColor,
      outline,
      ...props,
      children: loading === true
        ? <Spinner size={spinnerSize || 18} color={spinnerColor}/>
        : children
    }

    if (bg) {
      buttonProps.bg = bg
    }

    buttonProps.ref = ref

    return React.createElement(TypeButton, buttonProps)
  }
)

export const SubmitButton = React.forwardRef(
  function SubmitButton (props, ref) {
    return React.createElement(
      SpinnerButton,
      {
        ref,
        type: 'submit',
        ...props,
        children: props.children || 'Submit'
      }
    )
  }
)