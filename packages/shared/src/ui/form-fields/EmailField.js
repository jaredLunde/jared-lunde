import React from 'react'
import {Link} from 'react-router-dom'
import {Type} from 'styled-curls'
import FormField from '@jaredlunde/react-form-field'
import {InputGroup, GroupInput, GroupLabel} from '@jaredlunde/curls-addons'
import {isValidEmail} from './validation'


export function EmailInput ({
  formFieldRef,
  isValid,
  reset,
  value,
  m,
  className,
  iconSize,
  placeholder = 'Your Email',
  ...props
}) {
  return InputGroup({
    m,
    className,
    children: (
      <>
        <GroupLabel htmlFor='email-address'>
          Email
        </GroupLabel>

        <GroupInput
          id='email-address'
          type='email'
          name='email'
          placeholder={placeholder}
          value={value || ''}
          innerRef={formFieldRef}
          autoCapitalize='off'
          autoCorrect='off'
          autoComplete='email'
          {...props}
        />
      </>
    )
  })
}


function emailTransformer (v) {
  return v.replace(/[^a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\-@]/, '')
}


export default function (props) {
  return <FormField
    validator={isValidEmail}
    transformer={emailTransformer}
    {...props}
    children={EmailInput}
  />
}
