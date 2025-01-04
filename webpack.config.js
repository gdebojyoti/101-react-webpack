const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash:8].js',
    clean: true
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
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
      filename: path.resolve(__dirname, 'dist/index.html'),
      template: path.resolve(__dirname, 'src/template.html')
    })
  ]
}