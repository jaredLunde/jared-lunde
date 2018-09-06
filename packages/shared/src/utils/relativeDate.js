const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const WEEK = 7 * DAY
const YEAR = DAY * 365
const MONTH = YEAR / 12
const DEFAULT_FORMAT = [
  [0.7 * MINUTE, 'just now'],
  [2 * MINUTE, 'a minute ago'],
  [60 * MINUTE, 'm ago', MINUTE],
  [1.5 * HOUR, 'an hour ago'],
  [DAY, 'h ago', HOUR],
  [2 * DAY, 'yesterday'],
  [7 * DAY, 'd ago', DAY],
  [1.5 * WEEK, 'a week ago'],
  [MONTH, 'w ago', WEEK],
  [1.5 * MONTH, 'a month ago'],
  [YEAR, 'mo ago', MONTH],
  [1.5 * YEAR, 'a year ago'],
  [Infinity, 'y ago', YEAR]
]


export default function relativeDate (input, reference, formats = DEFAULT_FORMAT) {
  reference.getTime !== void 0 && (reference = reference.getTime())
  input.getTime !== void 0 && (input = input.getTime())

  const delta = reference - input
  let format

  for (let x = 0; x < formats.length; x++) {
    format = formats[x]
    const [cmp, desc, exact] = format

    if (delta < cmp) {
      return (
        exact === void 0
        ? desc
        : `${Math.floor(delta / exact)}${desc}`
      )
    }
  }
}

export function fromNow (inputDate, formats) {
  return relativeDate(inputDate, (new Date).getTime(), formats)
}
