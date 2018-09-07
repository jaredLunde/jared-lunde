import React from 'react'
import Helmet from 'react-helmet'
import {Type, Row, Box, A} from 'styled-curls'
import pure from 'react-purity'
import Hover from '@render-props/hover'
import {Icon, TransitionScale, TransitionDrop} from '@jaredlunde/curls-addons'
import {assets} from '~/config'
import {Hero, Content, Cover} from '~/ui'


const TransitionIcon = pure(
  ({delay, speed, ...props}) => (
    <TransitionDrop fromBottom delay={delay} easing='swiftMove' speed={speed}>
      {({className}) => <Icon {...props} className={className}/>}
    </TransitionDrop>
  )
)

const bgSrcSet = [
  {
    src: assets.resolveImg('rocky-mountains-colorado.jpg'),
    mime: 'image/jpeg',
    width: 1284,
    height: 673
  },
  {
    src: assets.resolveImg('rocky-mountains-colorado.webp'),
    mime: 'image/webm',
    width: 1284,
    height: 673
  },
  {
    src: assets.resolveImg('rocky-mountains-colorado--sm.jpg'),
    mime: 'image/jpeg',
    width: 600,
    height: 314
  },
  {
    src: assets.resolveImg('rocky-mountains-colorado--sm.webp'),
    mime: 'image/webm',
    width: 600,
    height: 314
  },
]

export default class Home extends React.PureComponent {
  render () {
    return (
      <Hero p={0} ov='hidden' bg='darkestGrey'>
        <Helmet>
          <title>Jared Lunde -  💻 ⚛️🎨⚾🤔🧘</title>
          <meta
            name='description'
            content='Jared Lunde is a full-stack developer in Denver, Colorado specializing in serverless universal React applications.'
          />
        </Helmet>

        <Cover
          srcset={bgSrcSet}
          alt={`A picture of Colorado's Rocky Mountain National Park taken by Jared Lunde.`}
        />

        <Content tight>
          <TransitionDrop fromTop={-100} med easing='swiftMove'>
            {({className}) => (
              <div className={className}>
                <Type nodeType='pre' center bold xs w='100%' d='block' m='b4'>
                  def follow_jared():
                </Type>
              </div>
            )}
          </TransitionDrop>

          <Row align='center' justify='center' z='1'>
            <Hover>
              {({isHovering, hoverRef}) => (
                <A
                  d='inlineBlock'
                  h='64'
                  w='64'
                  href='https://instagram.com/jaredlunde'
                  title='Follow Jared Lunde on Instagram'
                  innerRef={hoverRef}
                  css={`${isHovering ? 'opacity: 0.6;' : ''}`}
                  data-strict
                >
                  <TransitionIcon
                    name='instagram'
                    color='white'
                    size={64}
                    speed='med'
                  />
                </A>
              )}
            </Hover>

            <Hover>
              {({isHovering, hoverRef}) => (
                <A
                  d='inlineBlock'
                  h='108'
                  w='108'
                  m='x4'
                  href='https://github.com/jaredLunde'
                  title='Follow Jared Lunde on GitHub'
                  innerRef={hoverRef}
                  css={`${isHovering ? 'opacity: 0.6;' : ''}`}
                  data-strict
                >
                  <TransitionIcon
                    name='gitHub'
                    color='white'
                    size={108}
                    delay={160}
                  />
                </A>
              )}
            </Hover>

            <Hover>
              {({isHovering, hoverRef}) => (
                <A
                  d='inlineBlock'
                  h='64'
                  w='64'
                  href='https://twitter.com/jaredLunde'
                  title='Follow Jared Lunde on Twitter'
                  innerRef={hoverRef}
                  css={`${isHovering ? 'opacity: 0.6;' : ''}`}
                  data-strict
                >
                  <TransitionIcon
                    name='twitter'
                    color='white'
                    size={64}
                    delay={90}
                    speed='slow'
                  />
                </A>
              )}
            </Hover>
          </Row>
        </Content>
      </Hero>
    )
  }
}
