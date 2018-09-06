let PLATFORM = 'client'

if (typeof process !== 'undefined' && process.env) {
  PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'client'
}

if (typeof __PLATFORM__ !== 'undefined') {
  PLATFORM = __PLATFORM__
}

export default PLATFORM
