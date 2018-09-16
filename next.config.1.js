/* eslint-disable */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')


// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withCss(withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssModules: true,
  exclude: /node_modules/,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  pageExtensions: ['jsx', 'js'],
  webpack(config, { dev }){
    
    return commonsChunkConfig(config, /\.(less|css)$/)
    // return config
  }
}))
