import React, {useState, useEffect, useRef} from 'react'
import {animated, useTransition} from 'react-spring'
import {css, Text} from 'curls'
import {requestInterval, clearRequestInterval} from '@essentials/request-interval'


const
  AnimatedText = animated(Text),
  willChange = css`will-change: transform;`

export default ({children, config, ...textProps}) => {
  const
    [transitions, setTransitions] = useState(children[0].split('')),
    iteration = useRef(0)

  useEffect(
    () => {
      const i = requestInterval(
        () => {
          let nextChild = children[children.indexOf(transitions.join('')) + 1]

          if (nextChild === void 0)
            nextChild = children[0]

          setTransitions(nextChild.split(''))
          iteration.current++
        },
        2000
      )

      return () => clearRequestInterval(i)
    },
    [children, transitions]
  )

  const items = useTransition(
    transitions,
    (item, i) => `${transitions.join('')}:${i}:${iteration.current}`,
    {
      from: {transform: 'translate3d(0, -48px, 0)', opacity: 0},
      enter: {transform: 'translate3d(0, 0px, 0)', opacity: 1},
      trail: 60,
      native: true,
      order: ['from', 'enter'],
      ...config
    }
  )

  return items.map(({item, props, key}) =>
    <AnimatedText key={key} style={props} d='inlineBlock' css={willChange} {...textProps}>
      {item === ' ' ? "\u00A0" : item}
    </AnimatedText>
  )
}