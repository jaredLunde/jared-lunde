const instWebpack = require('@inst-app/webpack')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const defaults = require('./defaults')


module.exports = instWebpack.createProduction(
  defaults,
  {
    module: {
      rules: [
        {
          test: /@jaredlunde|react-router|polished|@render-props|history/,
          sideEffects: false
        }
      ]
    },
    plugins: [
      new webpack.optimize.AggressiveSplittingPlugin({
        minSize: 24000,
        maxSize: 96000
      }),
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
              drop_console: true,
              pure_getters: 'strict',
              unsafe: true,
              unsafe_comps: true,
              unsafe_Function: true,
              unsafe_math: true,
              unsafe_regexp: true,
              unsafe_undefined: true,
              warnings: false,
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
        chunks: 'all',
        minSize: 24 * 1000,
        maxAsyncRequests: 3,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
          default: {
            chunks: 'async',
            minSize: 24 * 1000,
            minChunks: 1,
            maxAsyncRequests: 4,
            maxInitialRequests: 4,
            priority: -20,
            reuseExistingChunk: true,
          },

          pages: {
            name: 'pages',
            chunks: 'initial',
            minSize: 0,
            minChunks: 1,
            maxAsyncRequests: 2,
            maxInitialRequests: 2,
            priority: -1,
            reuseExistingChunk: true,
            test: function(module) {
              return module.resource && module.resource.match(/\/pages\//)
            },
          }
        },
      }
    }
  }
)
