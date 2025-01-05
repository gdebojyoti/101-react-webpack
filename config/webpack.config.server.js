const path = require('path')

const SOURCE_DIR = path.resolve(__dirname, '../src')
const TARGET_DIR = path.resolve(__dirname, '../dist-server')

module.exports = {
  target: 'node',
  mode: 'production',
  entry: {
    main: path.resolve(SOURCE_DIR, 'server/app.js')
  },
  output: {
    path: TARGET_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react'
              ]
            }
          }
        ]
      }
    ]
  }
}