const path = require('path')
const appPaths = require('./paths')
const ImageminPlugin = require("imagemin-webpack")
const imageminMozJpeg = require("imagemin-mozjpeg")
const imageminOptipng = require("imagemin-optipng")


function createAliases (inherits) {
  const aliases = {}

  for (let inherit of inherits) {
    aliases[`~${path.basename(path.dirname(inherit))}`] = inherit
  }

  return aliases
}

module.exports = {
  resolveLoader: {
    modules: [appPaths.modules]
  },

  resolve: {
    modules: [appPaths.modules],
    
  },
  
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          name: '[folder]/[hash:8]/[name]-[width]x[height].[ext]',
          adapter: require('responsive-loader/sharp')
        }
      }
    ],
  },

  plugins: [
    new ImageminPlugin({
      bail: false,
      cache: true,
      loader: false,
      maxConcurrency: 4,
      imageminOptions: {
        plugins: [
          imageminMozJpeg({
            quality: 90,
            progressive: true
          }),
            imageminOptipng({
            optimizationLevel: 7
          })
        ]
      }
    })
  ]
}