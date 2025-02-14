const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');
const path = require("path");

module.exports = {
  // theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题
  theme: path.resolve(__dirname, '../../theme-vdoing/index.js'), // 使用本地主题

  title: "Wiidede's blog",
  description: 'wiidede的个人博客，主要写写前端',
  base: '/wiidede-vuepress-blog/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
