const WindiCSS = require('windicss-webpack-plugin').default

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: config => {
    config.plugins.push(new WindiCSS())
    return config
  },
}
