import React from 'react'
import Toggle from '@render-props/toggle'
import {A, Box, Input} from 'styled-curls'
import {InputGroup, GroupInput, GroupLabel} from '@jaredlunde/curls-addons'
import FormField from '@jaredlunde/react-form-field'
import {isValidPassword} from './validation'


export function PasswordInput ({
  formFieldRef,
  isValid,
  reset,
  value,
  toggle,
  m,
  on,
  off,
  isRevealed,
  className,
  name = 'password',
  canReveal = false,
  ...props
}) {
  return InputGroup({
    m,
    className,
    children: (
      <>
        <GroupLabel htmlFor={name}>
          Password
        </GroupLabel>

        <GroupInput
          id={name}
          type={!canReveal || !isRevealed ? 'password' : 'text'}
          name={name}
          placeholder='Password'
          value={value || ''}
          innerRef={formFieldRef}
          autoCorrect='off'
          autoComplete='off'
          autoCapitalize='off'
          {...props}
        />

        {canReveal && (
          <Box nodeType='span' flex align='center' p='r3'>
            {A({
              xs: true,
              flex: true,
              color: 'black',
              role: 'button',
              align: 'center',
              justify: 'center',
              onClick: toggle,
              children: isRevealed ? 'Hide' : 'Show'
            })}
          </Box>
        )}
      </>
    )
  })
}


export default function ({minLen, ...props}) {
  return <FormField validator={isValidPassword({minLen})} {...props} children={
    function (formProps) {
      return (
        <Toggle initialValue={false}>
          {function ({value, ...toggleContext}) {
            return PasswordInput({
              ...formProps,
              ...props,
              isRevealed: value,
              ...toggleContext
            })
          }}
        </Toggle>
      )
    }
  }/>
}
