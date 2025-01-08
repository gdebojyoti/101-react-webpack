const path = require('path')
const nodeExternals = require('webpack-node-externals');

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
  externals: [nodeExternals()], // Exclude all Node modules, including react/react-dom
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