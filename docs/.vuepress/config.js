// 'use strict'
var AliyunOSSPlugin = require("aliyun-oss-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  title: 'Alan Wang',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'VuePress', link: 'https://vuepress.vuejs.org/' },
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'Japanese', link: '/language/japanese' }] 
          },
          { text: 'Group2', items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'Japanese', link: '/language/japanese' }]
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'guide',
          collapsable: false
        },
        'guide1',
        'guide2'
      ]
    },
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