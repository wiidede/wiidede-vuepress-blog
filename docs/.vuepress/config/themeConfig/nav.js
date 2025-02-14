// nav
module.exports = [
  // { text: '首页', link: '/' },
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
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
	{
		text: '关于',
		items: [
			{ text: '关于我', link: '/about-me/' },
			{ text: '赞赏', link: '/sponsor/' },
			{ text: '我的小站', link: 'https://wiidede.github.io/little-page/' },
		]
	},
]
