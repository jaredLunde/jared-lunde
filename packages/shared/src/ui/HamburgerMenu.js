import React from 'react'
import Portalize from 'react-portalize'
import {Type, Button, Drawer, Modal} from 'styled-curls'
import {Icon} from '@jaredlunde/curls-addons'
import {css} from 'emotion'
import Hamburger_ from './Hamburger'


const drawerCSS = css`
  top: 64px;
  bottom: 0;
`

export default function HamburgerMenu (props) {
  return (props.modal ? Modal : Drawer)({
    fromBottom: true,
    ...props,
    slow: true,
    className: [drawerCSS, props.className],
    children: ({DrawerBox, ModalBox, toggle, hide, isVisible, Hamburger}) => (
      <>
        <Portalize>
          {(DrawerBox || ModalBox)({
            className: drawerCSS,
            w: '100%',
            ov: 'touch',
            children: function ({isVisible, show, hide, toggle}) {
              return props.children({isVisible, hide})
            }
          })}
        </Portalize>

        {(Hamburger || Hamburger_)({onClick: toggle, isVisible})}
      </>
    )
  })
}
