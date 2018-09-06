import React from 'react'
import {NavBar, NavLink, H1, Row} from 'styled-curls'
import withSticky from '@jaredlunde/react-with-sticky'
import {Icon, TransitionDrop} from '@jaredlunde/curls-addons'
import {Content} from '~/ui'
import {home} from '~/sitemap'


class Header extends React.PureComponent {
  render () {
    return (
      <NavBar bc='black' bg='white' pos='sticky' bw='4' br='1' h='60' id='main-header' data-strict>
        <Row justify='between' align='center'>
          <TransitionDrop fromLeft med delay={300} easing='heavyMove'>
            {({className}) => (
              <Row align='center' w={64} h={60} p='x3' className={className} data-strict>
                <Icon name='logo' color='black' size='32' />
              </Row>
            )}
          </TransitionDrop>
          <TransitionDrop fromRight med delay={300} easing='heavyMove'>
            {({className}) => <H1 xxs right m='r3' color='black' pos='relative' style={{top: 2, lineHeight: 1}} className={className}>JARED<br/>LUNDE</H1>}
          </TransitionDrop>
        </Row>
      </NavBar>
    )
  }
}


export default withSticky(Header)
