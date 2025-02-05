const path = require('path')
const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const commonConfig = require('./webpack.config.common')

const SOURCE_DIR = path.resolve(__dirname, '../src')
const TARGET_DIR = path.resolve(__dirname, '../dist-server')

module.exports = {
  ...commonConfig,
  target: 'node',
  mode: 'development',
  entry: {
    main: path.resolve(SOURCE_DIR, 'server/app.js')
  },
  output: {
    path: TARGET_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs',
    clean: true
  },
  externals: [nodeExternals()], // Exclude all Node modules, including react/react-dom
  plugins: [new MiniCssExtractPlugin()]
}