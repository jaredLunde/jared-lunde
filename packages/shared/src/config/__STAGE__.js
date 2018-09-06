let STAGE = 'development'

if (typeof process !== 'undefined' && process.env) {
  STAGE = process.env.STAGE ? process.env.STAGE : 'development'
}

if (typeof __STAGE__ !== 'undefined') {
  STAGE = __STAGE__
}

export default STAGE
