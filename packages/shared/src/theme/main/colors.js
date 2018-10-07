import {lighten, darken, rgba} from 'polished'
import {defaultColors} from 'styled-curls'


const black = '#0A0F0F'
const grey = '#4A6566'
const white = '#FAFCFC'
const translucentWhite = rgba(white, 0.70)
const blue = '#0073AD'
const translucentGrey = rgba(grey, 0.70)
const red = '#FC6868'

const grayScale = {
  black,
  darkestGrey: lighten(0.05, black),
  darkerGrey: lighten(0.1, black),
  darkGrey: darken(0.05, grey),
  grey,
  lightGrey: lighten(0.24, grey),
  lighterGrey: lighten(0.55, grey),
  lightestGrey: lighten(0.60, grey),
  translucentWhite,
  translucentGrey,
  white,
}


export default {
  ...grayScale,

  green: '#2dc483',
  lightGreen: '#a1e9ca',
  darkGreen: '#28af75',

  blue,
  lightBlue: lighten(0.1, blue),

  red,
  lightRed: lighten(0.1, red),
  darkRed: darken(0.2, red),

  yellow: '#ffc952',
  lightYellow: '#FCFBF5',
  darkYellow: '#ffb91f',

  primary: red,
  accent: grayScale.lighterGrey,
  darkAccent: grayScale.darkerGrey,

  primaryText: grayScale.white,
  secondaryText: grayScale.darkGrey,

  primaryLink: grey,
  secondaryLink: blue,

  hover: {
    primaryLink: grayScale.darkerGrey,
    secondaryLink: grayScale.darkerGrey,
    white: grayScale.lighterGrey,
    accent: grayScale.white
  }
}
