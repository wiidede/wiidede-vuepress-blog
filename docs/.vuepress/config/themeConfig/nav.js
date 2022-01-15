// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '分类',
    items: [
      { text: '前端', link: '/front-end/' },
      { text: 'Python', link: '/python/' },
      { text: '算法', link: '/algorithm/' },
      { text: '生活', link: '/life/' },
      { text: '其他', link: '/other/' }
    ]
  },
  { text: '关于', link: '/about-me/' },
  { text: '我的小站', link: '/little-page/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
