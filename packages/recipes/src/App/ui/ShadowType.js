import React from 'react'
import {css} from 'emotion'
import {Type, withHoverQuery} from 'curls'
import theme from '../theme'


const ShadowType = React.memo(
  React.forwardRef(
    function ShadowType (props, ref) {
      return <Type {...props} ref={ref} css={
        css`
          ${props.className};
          text-shadow: 0px 3px 16px rgba(0,0,0,0.2);
        `
      }/>
    }
  )
)

export default ShadowType

export const ShadowLink = React.forwardRef(
  function ShadowLink (props, ref) {
    return <ShadowType
      ultraHeavy
      nodeType='a'
      {...props}
      ref={ref}
      css={withHoverQuery(
        `
        ${props.className};
        &:hover {
          color: ${theme.colors.lightAccent};
        }
      `,
        `
        &:hover {
         color: ${props.color || theme.colors.white};
        }
      `
      )}
    />
  }
)