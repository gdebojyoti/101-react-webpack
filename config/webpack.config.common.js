const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const SOURCE_DIR = path.resolve(__dirname, '../src')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      pages: path.resolve(SOURCE_DIR, 'pages'),
      shared: path.resolve(SOURCE_DIR, 'shared')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@wyw-in-js/webpack-loader'
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react'
              ]
            }
          },

        ]
      }
    ]
  }
}