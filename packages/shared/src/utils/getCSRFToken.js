import Cookies from 'js-cookie'
import cryptoRandomString from './cryptoRandomString'


export function setCSRFToken (length) {
  if (!Cookies.get('csrf') && typeof window !== 'undefined') {
    const token = cryptoRandomString(length)
    Cookies.set('csrf', token, {domain: '.' + window.location.hostname, secure: true})

    return token
  }
}


export default function getCSRFToken () {
  const token = Cookies.get('csrf')
  return token ? token : setCSRFToken()
}
