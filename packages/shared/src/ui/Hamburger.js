import React from 'react'
import {css, cx} from 'emotion'
import {Button, BasicBox, defaultColors, mergeTheme} from 'curls'
import {Icon} from '@jaredlunde/curls-addons'
import theme from '~/theme'


const defaultTheme = {
  defaultColor: 'white'
}
const themePath = 'hamburger'
const lineCSS = css`
  width: 16px;
  height: 1px;
  min-height: 1px;
  border-radius: 1px;
  margin-top: 1px;
  margin-bottom: 1px;
  position: relative;
  contain: layout size;
`

export default function Hamburger (props) {
  const theme = mergeTheme(defaultTheme, props.theme, themePath)

  return (
    <Button
      column
      align='stretch'
      bg='transparent'
      bw={0}
      br={0}
      h='100%'
      p='x3'
      pos='relative'
      aria-label='Main Menu'
      onClick={props.onClick}
    >
      {BasicBox({
        bg: props.color || theme.defaultColor,
        children: function (boxProps) {
          const {className} = boxProps
          const lineClass = cx(lineCSS, className)
          return (
            props.isVisible
            ? <Icon name='close' size={12} color='white'/>
            : (
              <>
                <span className={lineClass}/>
                <span className={lineClass}/>
                <span className={lineClass}/>
                <span className={lineClass}/>
                <span className={lineClass}/>
              </>
            )
          )
        }
      })}
    </Button>
  )
}
