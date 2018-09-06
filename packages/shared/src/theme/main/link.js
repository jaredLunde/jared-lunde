import {css} from 'emotion'
import {withHoverQuery} from 'styled-curls'


export default {
  defaultProps: {
    color: 'primaryLink'
  },

  getHoverClass: function (props, theme) {
    const hoverClass = css`
      &:hover {
        color: ${theme.colors.hover[props.color] || props.color};
      }
    `

    const noneClass = css`
      &:hover {
        color: ${theme.colors[props.color] || props.color};
      }
    `

    return withHoverQuery(hoverClass, noneClass)
  }
}
