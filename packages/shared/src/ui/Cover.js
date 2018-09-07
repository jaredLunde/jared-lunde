import React from 'react'
import {Box} from 'styled-curls'
import {TransitionFade} from '@jaredlunde/curls-addons'
import SizeObserver from '@render-props/size-observer'
import Picture from '@jaredlunde/react-picture'


export default function Cover (props) {
  return (
    <SizeObserver>
      {({sizeRef, width, height}) => (
        <TransitionFade slow from={0.01} to={0.24} delay={60} easing='swiftMove'>
          {({className}) => (
            <Box
              flex
              justify='center'
              align='center'
              w='100%'
              h='100%'
              pos='absolute'
              z='0'
              className={className}
              css='max-height: 100%;'
              innerRef={sizeRef}
              data-strict
            >
              <Picture width={width} height={height} {...props} data-strict/>
            </Box>
          )}
        </TransitionFade>
      )}
    </SizeObserver>
  )
}
