const devClientConfig = require('./webpack.config.client')

module.exports = {
  ...devClientConfig,
  mode: 'production'
}