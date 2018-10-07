import React from 'react'
import withSticky from '@jaredlunde/react-with-sticky'
import {Icon, TransitionDrop} from '@jaredlunde/curls-addons'
import {
  BreakPoint,
  NavBar,
  A,
  Type,
  H1,
  Row,
  Link,
  Box
} from 'styled-curls'
import {Menu, Content, IconButton, HamburgerMenu} from '~/ui'
import {home} from '~/sitemap'
import profilePicture from '~/public/images/profile.jpg'


class Header extends React.PureComponent {
  render () {
    return (
      <NavBar
        w='100%'
        bg='darkerGrey'
        pos='sticky'
        h={64}
        sh={1}
        z={1001}
        data-strict
      >
        <Row justify='between' align='center' css='text-align: center;'>
          <BreakPoint sm>
            {({matches}) => (
              <TransitionDrop fromLeft med delay={300} easing='heavyMove'>
                {({className}) => (
                  <Box
                    align='center'
                    w={48}
                    h={64}
                    className={className}
                    data-strict
                  >
                    <HamburgerMenu fromLeft={!matches.sm}>
                      {({isVisible, hide}) => (
                        <Box
                          bg='darkestGrey'
                          p={4}
                          w={matches.sm ? '100%' : 260}
                          sh={!matches.sm && 16}
                          css='min-height: 100%;'
                          data-strict
                        >
                          <Menu isVisible={isVisible}/>
                        </Box>
                      )}
                    </HamburgerMenu>
                  </Box>
                )}
              </TransitionDrop>
            )}
          </BreakPoint>

          <Link
            flex
            to={home()}
            pos='absolute'
            w={48}
            h='100%'
            align='center'
            style={{margin: '0 auto', left: 0, right: 0}}
            data-strict
          >
            <Box
              flex
              nodeType='span'
              br={2}
              w={48}
              h={48}
              align='start'
              justify='center'
              ov='hidden'
              data-strict
            >
              <img src={profilePicture} width={48}/>
            </Box>
          </Link>

          <TransitionDrop fromRight med delay={300} easing='heavyMove'>
            {({className}) => <H1
              xxs
              bold
              right
              m='r3'
              color='white'
              pos='relative'
              face='secondary'
              style={{top: 2, lineHeight: 1}}
              className={className}
            >
              JARED<br/>LUNDE
            </H1>
          }
          </TransitionDrop>
        </Row>
      </NavBar>
    )
  }
}

export default withSticky(Header)
