const instWebpack = require('@inst-app/webpack')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const defaults = require('./defaults')
let envDefaults = {}
let createConfig = instWebpack.createDevelopment


if (process.env.NODE_ENV === 'production') {
  createConfig = instWebpack.createProduction
  envDefaults = {
    plugins: [
      ...defaults.plugins,
      new webpack.LoaderOptionsPlugin({minimize: false, debug: false}),
    ],

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          terserOptions: {
            compress: {
              passes: 2,
              keep_infinity: true,
              drop_console: false,
              pure_getters: 'strict',
              toplevel: true,
              unsafe: true,
              unsafe_comps: true,
              unsafe_Function: true,
              unsafe_math: true,
              unsafe_proto: true,
              unsafe_regexp: true,
              unsafe_undefined: true,
              warnings: false,
              ecma: 5,
              dead_code: true
            },
            output: {
              comments: false
            },
            sourceMap: false
          }
        })
      ],

      splitChunks: {
        cacheGroups: {
          default: {
            name: 'default',
            chunks: 'initial',
            minSize: 48 * 1000,
            maxSize: 128 * 1000,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 6,
            priority: -10,
            reuseExistingChunk: true,
          },

          icons: {
            name: 'icons',
            chunks: 'all',
            enforce: true,
            priority: 10,
            reuseExistingChunk: true,
            test: function(module) {
              return module.resource && module.resource.includes('\/icons\/')
            },
          }
        },
      }
    }
  }
}

module.exports = createConfig(
  defaults,
  envDefaults,
  {
    output: {
      globalObject: 'this'
    }
  }
)