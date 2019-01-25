const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const defaultPlugins= [
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"development"'
        }
      }),
      new HTMLPlugin({
        template: path.join(__dirname,'template.html')
      }),
      new VueLoaderPlugin()
]

let config
let devServer= {
    port: 8080,
    host: '127.0.0.1',
    overlay: {
      errors: true,
    },
    hot: true
  }

  config = merge(baseConfig,{
    entry: path.join(__dirname,'../practice/index.js'),
    devtool : '#cheap-module-eval-source-map',
    module:{
        rules:[
        {
            test: /\.styl/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                }
              },
              'stylus-loader'
            ]
        }
    ]
},
devServer,
resolve: {
  alias: {
    'vue': path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
  }
},
plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
    // new webpack.NoEmitOnErrorsPlugin()
])
})

module.exports = config
