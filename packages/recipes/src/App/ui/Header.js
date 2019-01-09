import React from 'react'
import {Box, NavBar, Type, NavLink, BreakPoint} from 'curls'
import withSticky from '@jaredlunde/react-with-sticky'
import HamburgerMenu, {createHamburger} from '@stellar-apps/hamburger-menu'
import {Content} from '~/ui'
import {home} from '~/sitemap'


export default withSticky(
  class Header extends React.Component {
    render () {
      return (
        <NavBar pos='sticky' id='main-header' h={72} bw='b1' z='10000' bg='#fff'>
          <Content flex h='100%' justify='center'>
            <HamburgerMenu fromLeft verySlow>
              {({isVisible, hide}) => (
                <Box h='100vh' w='320' bg='primary' sh='24' onClick={hide}>
                  <Type>
                    Hello
                  </Type>
                </Box>
              )}
            </HamburgerMenu>

            <BreakPoint sm>
              {({matches}) => (
                <NavLink bold lg={!matches.sm} md={matches.sm} flex to={home()} align='center' h='100%' color='lightAccent' p='x4'>
                  recipes by jared
                </NavLink>
              )}
            </BreakPoint>
          </Content>
        </NavBar>
      )
    }
  }
)