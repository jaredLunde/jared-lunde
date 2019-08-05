import React from 'react'


export default ({pathStyle, title, ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 32 32' {...props}>
    <title>{title}</title>
    <polygon points="32 32 0 32 0 0 2 0 2 30 32 30 32 32" style={pathStyle}/>
    <polygon
      points="16 0 16 2 28.586 2 14.876 15.709 16.291 17.124 30 3.414 30 16 32 16 32 0 16 0"
      style={pathStyle}
    />
  </svg>
)
