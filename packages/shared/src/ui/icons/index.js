import React from 'react'
import lazy from '@inst-app/ssr/lazy.macro'
import {Box} from 'curls'


const lazyOpt = {
  loadingComponent: function loadingComponent (props) {
    return <Box
      d='inlineBlock'
      role={props.role || ''}
      title={props.title}
      aria-label={props.title}
      br={5}
      className={props.className}
      style={{backgroundColor: props.pathStyle.fill, ...props.style, opacity: 0.2}}
    />
  }
}

export const AppStore = lazy('./AppStore', lazyOpt)
export const Caret = lazy('./Caret', lazyOpt)
export const Check = lazy('./Check', lazyOpt)
export const Close = lazy('./Close', lazyOpt)
export const Dots = lazy('./Dots', lazyOpt)
export const Empty = lazy('./Empty', lazyOpt)
export const GitHub = lazy('./GitHub', lazyOpt)
export const GooglePlay = lazy('./GooglePlay', lazyOpt)
export const Instagram = lazy('./Instagram', lazyOpt)
export const Logo = lazy('./Logo', lazyOpt)
export const Paper = lazy('./Paper', lazyOpt)
export const Twitter = lazy('./Twitter', lazyOpt)
