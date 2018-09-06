export default function cryptoRandomString (
  length = 16,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789./+_-$~*"
) {
  let result = ""
  const rng =
    typeof window !== 'undefined'
    ? (window.crypto || window.msCrypto)
    : typeof crypto !== 'undefined'
      ? crypto
      : null

  if (rng && rng.getRandomValues) {
    const values = new Uint32Array(length)
    rng.getRandomValues(values)

    for(let i = 0; i < length; i++) {
      result += charset[values[i] % charset.length]
    }
  } else {
    // TODO: pull this from the server instead. Return a promise.
    for (let i = 0; i < length; i++) {
      result += charset[Math.floor(Math.random() * charset.length)]
    }
  }

  return result
}
