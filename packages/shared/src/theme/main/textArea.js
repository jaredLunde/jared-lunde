import {css} from 'emotion'
import {colorize} from 'styled-curls'
import input from './input'


export default {
  defaultProps: {
    ...input.defaultProps,
    h: 84
  },

  getPlaceholderClass: input.getPlaceholderClass,
  getFocusClass: input.getFocusClass,
}
