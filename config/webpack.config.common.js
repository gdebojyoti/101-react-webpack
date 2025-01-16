const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
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