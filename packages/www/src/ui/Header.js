import React from 'react'
import {Text, Link} from 'curls'
import {Icon} from '@jaredlunde/curls-addons'
import {Content} from '@stellar-apps/content'
import {pascal} from 'change-case'
import * as urls from '../urls'
import Tooltip from './Tooltip'


const Header = props => (
  <Content as='header' flex p='t4 x4' align='center' justify='between' {...props}>
    <Link to={urls.home()} color='secondaryText' rel='home'>
      <span aria-hidden>☉</span> Jared Lunde
    </Link>

    <IconLinks/>
  </Content>
)

const IconLink = ({name, size, p = '2'}) => (
  <Tooltip text={`Follow me on ${pascal(name)}`}>
    <Text
      as='a'
      href={urls[name]()}
      p={p}
      size={size}
      color='currentColor'
    >
      <Icon name={name} title={`Follow me on ${pascal(name)}`} color='currentColor'/>
    </Text>
  </Tooltip>
)

export const IconLinks = ({size, color = 'secondaryText'}) => (
  <Text color={color}>
    <IconLink size={size} name='twitter'/>
    <IconLink size={size} name='instagram'/>
    <IconLink size={size} name='gitHub'/>
  </Text>
)

export default Header