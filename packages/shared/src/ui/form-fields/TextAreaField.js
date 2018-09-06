import React from 'react'
import {TextArea} from 'styled-curls'
import FormField from '@jaredlunde/react-form-field'


export function TextArea_ ({
  formFieldRef,
  isValid,
  reset,
  value,
  ...props
}) {
  return <TextArea
    value={value || ''}
    innerRef={formFieldRef}
    autoCapitalize='sentences'
    autoCorrect='on'
    w='100%'
    bg='white'
    p='x3 y2'
    {...props}
  />
}


export default function TextAreaField ({maxLen = 14000, ...props}) {
  return <FormField maxLength={maxLen} {...props} children={TextArea_}/>
}
