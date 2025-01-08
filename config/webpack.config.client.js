const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SOURCE_DIR = path.resolve(__dirname, '../src')
const TARGET_DIR = path.resolve(__dirname, '../dist')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(SOURCE_DIR, 'app.js')
  },
  output: {
    path: TARGET_DIR,
    filename: '[name]-[contenthash:8].js',
    clean: true
  },
  devServer: {
    static: {
      directory: TARGET_DIR
    },
    port: 3001,
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // maxSize: 1024*500,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]react[\\/]/,
          name: 'vendor-react',
          chunks: 'all'
        },
        reactDom: {
          test: /[\\/]node_modules[\\/]react-dom[\\/]/,
          name: 'vendor-react-dom',
          chunks: 'all'
        },
        redux: {
          test: /[\\/]node_modules[\\/]redux[\\/]/,
          name: 'vendor-redux',
          chunks: 'all'
        },
        otherVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor-all',
          chunks: 'all',
          priority: -10
        }
      }
    }
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReLearning ReactJS - with Webpack 5',
      filename: path.resolve(TARGET_DIR, 'index.html'),
      template: path.resolve(SOURCE_DIR, 'template.html')
    })
  ]
}