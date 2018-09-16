/* eslint-disable */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
const path = require('path')
const internalNodeModulesRegExp = /src(?!\/(?!.*js))/

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = withLess({
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
    
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]___[local]___[hash:base64:5]",
  },
  pageExtensions: ['jsx', 'js'],
  webpack(config, { dev, isServer, defaultLoaders }){

    console.log("@@1@@", config)
   /*  
    config.module.rules.push({
      test: /\.(css|less)$/,
      use: defaultLoaders.less,
      exclude: [
        /node_modules/
      ],  
    }) */

     /* config.module.rules.push({
       test: /\.(css|less)$/,
      use: defaultLoaders.less,
      exclude: [
        /src/
      ],  
    }) */
    
    /* config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: true,
            sourceMap: true,
          }
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
          }
        }
      ],
      include:[
        /node_modules/
      ],
    }) */
    
    // return commonsChunkConfig(config, /\.(less|css)$/)
    return config
  }
})
