/* eslint-disable */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')
// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

module.exports = {
  pageExtensions: ['jsx', 'js'],
  webpack(config, { dev }){
    config.module.rules.push({
              test: /\.less$/,
              exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                              modules: true,
                              importLoaders: 1,
                              localIdentName: "[name]___[local]___[hash:base64:5]",
                              minimize: true,
                              sourceMap: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                              plugins: function(){
                                  return [
                                    require('autoprefixer')()
                                  ]
                              }
                            }
                          },
                        {
                            loader: 'less-loader',
                            options: {
                              javascriptEnabled: true,
                            }
                        }
                    ],
                })
            })

    config.module.rules.push({
      test: /\.less$/,
      include: /node_modules/,
      use: ExtractTextPlugin.extract({
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
      })
    }) 
    config.module.rules.push({
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: [
          {
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true,
            }
          }
        ],
      })
    })

    config.plugins.push(new ExtractTextPlugin({
      filename: 'static/style.css'
    }))

    return commonsChunkConfig(config, /\.(less|css)$/)
  }

}
