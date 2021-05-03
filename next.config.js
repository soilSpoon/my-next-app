const WindiCSSWebpackPlugin = require('windicss-webpack-plugin').default

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: config => {
    config.plugins.push(new WindiCSSWebpackPlugin({
      scan: {
        dirs: ['./'],
        exclude: ['node_modules', '.git', '.next/**/*'],
      },

    }))
    return config
  },
}