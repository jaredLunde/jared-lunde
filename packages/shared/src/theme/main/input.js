import {css} from 'emotion'
import {colorize} from 'curls'


export default {
  defaultProps: {
    'data-autopaint': true
  },

  getPlaceholderClass: function (props, theme) {
    return css`
      opacity: 0.8;
      ${colorize('color', props.color, theme)};
    `
  },

  getFocusClass: function (props, theme) {
    return css`
      &:focus {
        color: ${props.color === 'translucentWhite' ? theme.colors.white : theme.colors.black};
      }
    `
  }
}
