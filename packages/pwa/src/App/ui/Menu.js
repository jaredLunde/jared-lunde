import React from 'react'
import {Box, A, Type} from 'curls'
import {Icon, TransitionScale, TransitionDrop} from '@jaredlunde/curls-addons'


const TransitionIcon = React.memo(
  ({delay, speed, href, title, ...props}) => (
    <TransitionDrop fromBottom delay={delay} easing='swiftMove' speed={speed}>
      {({className}) => (
        <A href={href} title={title}>
          <Icon {...props} className={className}/>
        </A>
      )}
    </TransitionDrop>
  )
)

function MenuA (props) {
  return <A
    xs
    center
    heavy
    h={32}
    w='100%'
    d='block'
    color='white'
    p='y2'
    data-strict
    {...props}
  />
}

function MenuGroup (props) {
  return (
    <Box nodeType='section' m={props.m || 'y4'}>
      <Type
        xs
        center
        bold
        nodeType='header'
        w='100%'
        h={16}
        color='lightGrey'
        face='secondary'
        m='b1'
        data-strict
      >
        {props.title.toUpperCase()}
      </Type>

      <Box data-autopaint>
        {props.children}
      </Box>
    </Box>
  )
}

export default function Menu (props) {
  return (
    <>
      <MenuGroup title='Recent Work' m='t0 b4'>
        <MenuA href='https://BeStellar.co'>
          Stellar
        </MenuA>

        <MenuA href='https://airwell.app'>
          Airwell
        </MenuA>
      </MenuGroup>

      <MenuGroup title='Open Source'>
        <MenuA href='https://github.com/jaredLunde/render-props'>
          render-props
        </MenuA>

        <MenuA href='https://github.com/jaredLunde/react-broker'>
          react-broker
        </MenuA>

        <MenuA href='https://github.com/jaredLunde/curls'>
          curls
        </MenuA>

        <MenuA href='https://github.com/jaredLunde/curls-native'>
          curls-native
        </MenuA>

        <MenuA href='https://github.com/jaredLunde/cargo-orm'>
          cargo-orm
        </MenuA>
      </MenuGroup>

      <MenuGroup title='Follow Me'>
        {props.isVisible && (
          <Box flex wrap m='t2' justify='center' align='center'>
            <TransitionIcon
              name='instagram'
              href='https://instagram.com/jaredlunde'
              title={`Follow Jared's photography and travel on Instagram`}
              color='white'
              size={21}
              delay={460}
              speed='slow'
            />
            <TransitionIcon
              name='gitHub'
              href='https://github.com/jaredLunde'
              title={`Follow Jared's FOSS on Github`}
              color='white'
              size={32}
              delay={540}
              speed='slow'
              m='x3'
            />
            <TransitionIcon
              name='twitter'
              href='https://twitter.com/jaredLunde'
              title={`Follow Jared's thoughts on Twitter`}
              color='white'
              size={21}
              delay={520}
              speed='slow'
            />
          </Box>
        )}
      </MenuGroup>
    </>
  )
}
