// 'use strict'
var AliyunOSSPlugin = require("aliyun-oss-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  title: 'Learning',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All', link: '/all/' },
      { text: 'Markdown', link: '/markdown/' },
      { text: 'github', link: 'https://github.com/ainialan6' }
    ],
    sidebar: 'auto',
    markdown: {
      config: md => {
        md.use(require('markdown-it'))
      }
    },
    lastUpdated: 'Last Updated', // string | boolean
    // 构建
    postcss: {},
    scss: {},
    // webpack
    configWebpack: config => {
      // if (process.env.NODE_ENV === 'production') {
      //   // 为生产环境修改配置...
      //   return {
      //     plugins: [
      //       // copy custom static assets
      //       new CopyWebpackPlugin([
      //         {
      //           from: path.resolve(__dirname, './dist'),
      //           to: '//47.104.198.170/www/static-web',
      //           ignore: ['.*']
      //         }
      //       ]),
      //       // aliyun oss
      //       new AliyunOSSPlugin({
      //         accessKeyId: '*',
      //         accessKeySecret: '*',
      //         region: 'oss-cn-beijing',
      //         // bucket: '*'
      //         bucket: '*'
      //       })
      //     ]
      //   }
      // } else {
      //   // 为开发环境修改配置...
      // }
    }
  }
}