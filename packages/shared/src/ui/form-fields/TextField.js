import React from 'react'
import {Input} from 'styled-curls'
import FormField from '@jaredlunde/react-form-field'


export function Text ({
  formFieldRef,
  isValid,
  reset,
  value,
  ...props
}) {
  return <Input
    value={value || ''}
    type='text'
    innerRef={formFieldRef}
    autoCapitalize='sentences'
    autoCorrect='on'
    w='100%'
    bg='white'
    p='x3 y2'
    {...props}
  />
}


export default function TextField ({maxLen = 14000, ...props}) {
  return <FormField maxLength={maxLen} {...props} children={Text}/>
}
