import React from 'react'
import {visuallyHidden} from '~/styles'


export const SkipNavLink = ({children = "Skip to main content", ...props}) => (
  <a {...props} href='#skip-nav' css={visuallyHidden}>
    {children}
  </a>
)

export const SkipNavContent = props => <div {...props} id='skip-nav'/>