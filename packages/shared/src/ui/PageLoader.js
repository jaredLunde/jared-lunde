import React from 'react'
import {DelayedSpinner} from '@jaredlunde/curls-addons'
import Hero from './Hero'


const Loader_ = <Hero children={<DelayedSpinner sm color='white'/>}/>

export default function PageLoader (props) {
  return Loader_
}
