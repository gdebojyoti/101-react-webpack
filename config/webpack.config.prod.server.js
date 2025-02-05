const devServerConfig = require('./webpack.config.server')

module.exports = {
  ...devServerConfig,
  mode: 'production'
}