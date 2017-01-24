const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.base.babel')({
  entry: [
  // disabled eventsource-polyfill because who the fuck uses IE to dev
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js')
  ],

  output: {
    filename: `[name].js`,
    chunkFilename: '[name].chunk.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(process.cwd(), 'app/index.html')
    })
  ],

  babelQuery: {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-async-to-generator', 'transform-decorators-legacy']
  },

  devtool: 'cheap-module-eval-source-map'
})
