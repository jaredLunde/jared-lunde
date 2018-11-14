import React from 'react'
import {css} from 'emotion'
import PropTypes from 'prop-types'
import {createComponent, renderNode, FlexBox} from 'curls'


const nodeType = 'div'
const defaultCSS = css`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const defaultTheme = {
  contentWidth: 1360
}

const SFC = createComponent({
  name: 'Content',
  propTypes: {
    contentWidth: PropTypes.number,
    tight: PropTypes.bool
  },
  CSS: {
    __base: (val, theme) => css`max-width: ${theme.contentWidth}px;`,
    tight: (val, theme) => val === true && (
      css`max-width: ${theme.contentWidth * 0.61803398875}px;`
    )
  },
  defaultTheme,
  themePath: 'content'
})


export default React.forwardRef(
  function Content (props, innerRef) {
    return SFC({
      __base: true,
      innerRef,
      ...props,
      children: function (boxProps) {
        boxProps.children = function (nodeProps) {
          nodeProps.children = props.children
          nodeProps.nodeType = nodeProps.nodeType || nodeType
          delete nodeProps.__base

          return renderNode(nodeProps, defaultCSS)
        }

        return FlexBox(boxProps)
      }
    })
  }
)
