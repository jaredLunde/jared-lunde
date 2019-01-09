import {css} from 'emotion'


function createShadow (dp, theme) {
  if (dp === void 0 || dp === false || dp === null || dp == 0) {
    return 'none'
  }

  dp = parseInt(dp)
  const ambientY = dp
  let ambientAlpha = (dp + 10) / 100
  ambientAlpha = Math.min(0.12, ambientAlpha)
  const ambientBlur = dp === 1 ? 3 : dp * 1.618
  let shadow = `0 ${ambientY}px ${ambientBlur}px rgba(0, 0, 0, ${ambientAlpha})`
  const directY = dp / 3
  const directBlur = dp === 1 ? 3 : dp * 1.618

  return `${shadow}, 0 ${directY}px ${directBlur}px rgba(0, 0, 0, ${ambientAlpha})`
}

export default {
  defaultProps: {
    bc: 'translucentLight'
  },

  spacingScale: [
    0,
    (1/4) * 16,
    (1/2) * 16,
    16,
    24,
    44,
    72,
    16 * 16,
    32 * 16
  ],

  createShadow,

  getBoxShadow: function (dp, theme) {
    return css`
      box-shadow: ${createShadow(dp, theme)};
    `
  }
}