import React from 'react'
import {Popover, PopoverBox, Text} from 'curls'


export default ({as = 'span', text, children}) =>
  <Popover fromLeft={-20} enterDelay={240}>
    {({popoverRef, show, hide}) => (
      <>
        <PopoverBox kind='tooltip' portal>
          {text}
        </PopoverBox>

        <Text
          as={as}
          d='inlineBlock'
          color='currentColor'
          onMouseEnter={show}
          onTouchStart={hide}
          onMouseLeave={hide}
          onTouchEnd={hide}
          ref={popoverRef}
        >
          {children}
        </Text>
      </>
    )}
  </Popover>