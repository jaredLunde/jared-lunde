import React from 'react'
import {Box} from 'styled-curls'


export default function SideBar (props) {
  return (
    <Box
      w={240}
      h='100%'
      bg='darkerGrey'
      sh={16}
      z={1000}
      ov='scrollY touch'
    >
      {props.children}
    </Box>
  )
}
