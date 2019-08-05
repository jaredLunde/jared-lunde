import React from 'react'
import {Box, Button, Link} from 'curls'


export default ({typeSize, className, ...props}) =>
  <Box className={className}>
    <Button as={p => <Link size={typeSize} {...p}/>} {...props}/>
  </Box>