import React from 'react'
import {DelayedSpinner} from '@jaredlunde/curls-addons'
import Hero from '@stellar-apps/viewport-hero'


const Loader_ = <Hero children={<DelayedSpinner sm color='lightAccent'/>}/>

export default function PageLoader (props) {
  return Loader_
}
