import React from 'react'
import Portalize from 'react-portalize'
import {Type, Button, Drawer, DrawerBox, Modal, ModalBox} from 'curls'
import {Icon} from '@jaredlunde/curls-addons'
import {css} from 'emotion'
import Hamburger_ from './Hamburger'


const drawerCSS = css`
  top: 64px;
  bottom: 0;
`

export default function HamburgerMenu (props) {
  const Component = props.modal ? Modal : Drawer
  const BoxComponent = Component === Modal ? ModalBox : DrawerBox

  return React.createElement(Component, {
    fromBottom: true,
    ...props,
    slow: true,
    className: [drawerCSS, props.className],
    children: ({toggle, hide, isVisible, Hamburger}) => (
      <>
        {React.createElement(
          BoxComponent, {
            w: '100%',
            ov: 'touch',
            portal: true,
            children: function ({isVisible, show, hide, toggle}) {
              return props.children({isVisible, hide})
            }
          }
        )}

        {(Hamburger || Hamburger_)({onClick: toggle, isVisible})}
      </>
    )
  })
}
