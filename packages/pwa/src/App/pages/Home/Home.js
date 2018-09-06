import React from 'react'
import Helmet from 'react-helmet'
import {Type, Row} from 'styled-curls'
import pure from 'react-purity'
import {Icon, TransitionScale, TransitionDrop} from '@jaredlunde/curls-addons'
import {assets} from '~/config'
import {Hero, Content} from 'shared/ui'


const TransitionIcon = pure(
  ({delay, speed, ...props}) => (
    <TransitionDrop fromBottom delay={delay} easing='swiftMove' speed={speed}>
      {({className}) => <Icon {...props} className={className}/>}
    </TransitionDrop>
  )
)

export default class Home extends React.PureComponent {
  render () {
    return (
      <Hero p={0}>
        <Helmet>
          <title>who is jared lunde?</title>
        </Helmet>

        <div style={{opacity: 0.14, position: 'absolute', zIndex: 0, background: `url(${assets.resolveImg('rocky-mountains-colorado.jpg')})`, backgroundSize: 'cover', width: '100%', height: '100%'}}></div>

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
            <a href='https://instagram.com/jaredlunde'>
              <TransitionIcon name='instagram' color='white' size={64} speed='med'/>
            </a>
            <a href='https://github.com/jaredLunde'>
              <TransitionIcon name='gitHub' color='white' size={96} m='x4' delay={160}/>
            </a>
            <a href='https://twitter.com/jaredLunde'>
              <TransitionIcon name='twitter' color='white' size={64} delay={90} speed='slow'/>
            </a>
          </Row>
        </Content>
      </Hero>
    )
  }
}
