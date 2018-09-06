export const isValidEmail = value => /\S+@\S+\.\S+/.test(value)
export const isValidLength = ({minLen, maxLen}) => value => {
  value = value.trim()
  return value.length >= minLen && value.length <= maxLen
}
export const isValidUsername = ({minLen, maxLen, regex = /[^a-zA-Z0-9_]/}) => value => !regex.test(value)
export const isValidPassword = ({minLen}) => value => false
