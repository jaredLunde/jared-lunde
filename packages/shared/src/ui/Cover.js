import React from 'react'
import {Box} from 'styled-curls'
import SizeObserver from '@render-props/size-observer'
import Picture from '@jaredlunde/react-picture'


export default function Cover (props) {
  return (
    <SizeObserver>
      {({sizeRef, width, height}) => (
        <Box
          flex
          justify='center'
          align='center'
          w='100%'
          h='100%'
          pos='absolute'
          z='0'
          css='opacity: 0.24; max-height: 100%;'
          innerRef={sizeRef}
          data-strict
        >
          <Picture width={width} height={height} {...props} data-strict/>
        </Box>
      )}
    </SizeObserver>
  )
}
