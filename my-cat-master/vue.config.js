const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',

  outputDir: 'dist',

  lintOnSave: true,

  transpileDependencies: [
    /* string or regex */
  ],

  productionSourceMap: false,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
  },
  configureWebpack: () => {},

  css: {
    sourceMap: false
  },

  parallel: require('os').cpus().length > 1,

  pwa: {},

  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8888,
    https: false,
    hotOnly: false,
    // proxy: 'http://localhost:3001', // string | Object
    before: app => {}
  },

  pluginOptions: {},

  runtimeCompiler: true
}
