import React from 'react'


export default ({pathStyle, ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 600 32' aria-hidden='true' {...props}>
    <path d="M600,0S509,23,300,23,0,0,0,0V32H600Z" style={pathStyle}/>
  </svg>
)
