const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

process.noDeprecation = true

module.exports = options => ({
  entry: [...options.entry, path.join(process.cwd(), 'app/styles.scss')],
  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/'
    },
    options.output
  ),
  module: {
    loaders: [
      {
        test: /\.(ts|tsx)$/,
        loaders: [
          { loader: 'cache-loader' },
          {
            loader: 'awesome-typescript-loader'
          }
        ],
        exclude: [/node_modules/]
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: ['eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              sourceMap: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]-[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              includePaths: [path.resolve(__dirname, '..', 'app', 'styles')]
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(
                  __dirname,
                  '..',
                  'app',
                  'styles',
                  'foundation.scss'
                ),
                path.resolve(__dirname, '..', 'app', 'styles', 'shared.scss')
              ]
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader']
      },
      {
        test: /\.html$/,
        loader: ['html-loader']
      },
      {
        test: /\.json$/,
        loader: ['json-loader']
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: ['file-loader']
      }
    ]
  },

  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),

    new CopyWebpackPlugin([{ from: 'public' }]),
    new CheckerPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin()
  ]),

  resolve: {
    modules: ['app', 'node_modules', 'app/assets', 'mock'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.css']
  },
  target: 'web',
  performance: options.performance || {},
  devtool: options.devtool
})
