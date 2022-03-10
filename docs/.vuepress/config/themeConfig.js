const nav = require('./themeConfig/nav.js');
const sidebar = require('./themeConfig/sidebar.js');
const htmlModules = require('./themeConfig/htmlModules.js');

// 主题配置
module.exports = {
	nav,
	sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
	logo: '/img/dede-logo.png', // 导航栏logo
	repo: 'wiidede/wiidede.github.io', // 导航栏右侧生成Github链接
	searchMaxSuggestions: 10, // 搜索结果显示最大数
	lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
	docsDir: 'docs', // 编辑的文件夹
	editLinks: false, // 启用编辑
	editLinkText: '编辑',

	//*** 以下配置是Vdoing主题改动和新增的配置 ***//

	// category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
	// tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
	// archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
	// categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

	bodyBgColor: {
		light: [
			'linear-gradient(36deg, rgba(176,98,234,1) 0%, rgba(243,146,242,1) 40%, rgba(254,208,143,1) 70%, rgba(246,243,159,1) 100%)',
			'linear-gradient(72deg, rgba(250,134,190,1) 0%, rgba(162,117,227,1) 40%, rgba(154,235,237,1) 70%, rgba(255,252,171,1) 100%)',
			'linear-gradient(108deg, rgba(190,220,250,1) 0%, rgba(152,172,248,1) 40%, rgba(176,136,249,1) 70%, rgba(218,159,249,1) 100%)',
			'linear-gradient(144deg, rgba(101,193,140,1) 0%, rgba(193,244,197,1) 40%, rgba(255,190,216,1) 70%, rgba(255,123,169,1) 100%)',
			'linear-gradient(90deg, rgba(255,187,204,1) 0%, rgba(255,204,204,1) 40%, rgba(255,221,204,1) 70%, rgba(255,238,204,1) 100%)'
		],
		dark: [
			'linear-gradient(36deg, rgba(26,26,64,1) 0%, rgba(39,0,130,1) 40%, rgba(122,11,192,1) 70%, rgba(250,88,182,1) 100%)',
			'linear-gradient(72deg, rgba(255,152,152,1) 0%, rgba(207,69,92,1) 40%, rgba(151,21,73,1) 70%, rgba(71,0,49,1) 100%)',
			'linear-gradient(108deg, rgba(27,31,58,1) 0%, rgba(83,53,74,1) 40%, rgba(166,73,66,1) 70%, rgba(255,120,68,1) 100%)',
			'linear-gradient(144deg, rgba(198,222,65,1) 0%, rgba(45,110,126,1) 40%, rgba(21,59,68,1) 70%, rgba(7,28,33,1) 100%'
		],
		read: 'linear-gradient(90deg, rgba(255,237,219,1) 0%, rgba(237,205,187,1) 20%, rgba(227,183,160,1) 76%, rgba(191,146,112,1) 100%)'
	},
	intervalTime: 30,
	transitionTime: 20,
	// 修改自定义背景方式
	// bodyBgImg: [
	// 	'https://cdn.jsdelivr.net/gh/wiidede/wiidede.github.io@master/docs/.vuepress/public/img/cover.jpg'
	// ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
	bodyBgImgOpacity: 1, // body背景图透明度，选值 0 ~ 1.0, 默认0.5


	// bodyBgImg: [
	//   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
	//   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
	//   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
	// ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
	// bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

	// titleBadge: false, // 文章标题前的图标是否显示，默认true
	// titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
	//   '图标地址1',
	//   '图标地址2'
	// ],
	// contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

	updateBar: { // 最近更新栏
		showToArticle: false, // 显示到文章页底部，默认true
		moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
	},
	// rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
	// sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
	pageButton: false, // 是否显示快捷翻页按钮，默认true

	sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

	author: {
		// 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
		name: 'wiidede', // 必需
		link: 'https://github.com/wiidede', // 可选的
	},
	blogger: {
		// 博主信息，显示在首页侧边栏
		avatar: 'https://cdn.jsdelivr.net/gh/wiidede/wiidede.github.io@master/docs/.vuepress/public/img/wiidede.png',
		name: 'Wiidede',
		slogan: '小的的写前端',
	},
	social: {
		// 社交图标，显示于博主信息栏和页脚栏
		// iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
		iconfontCssFile: '//at.alicdn.com/t/font_2587328_s79ahg537vj.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
		icons: [
			{
				iconClass: 'icon-mail',
				title: '发邮件',
				link: 'mailto:wiixdede@gmail.com',
			},
			{
				iconClass: 'icon-github',
				title: 'GitHub',
				link: 'https://github.com/wiidede',
			},
			{
				iconClass: 'icon-coolapk',
				title: '酷安',
				link: 'http://www.coolapk.com/u/641913',
			},
		],
	},
	// tagBgColor: ['#11a8cd', '#F8B26A', '#67CC86', '#E15B64', '#F47E60', '#849B87'], // 可选 tag 色系
	tagBgColor: ['#47b2c6', '#7e6ed2', '#c65b47', '#b2c647', '#ba8e3a', '#edab24', '#73c647', '#4773c6'],
	footer: {
		// 页脚信息
		createYear: 2021, // 博客创建年份
		copyrightInfo:
			'Wiidede | <span title="all the website\'s code/theme expect for article content and logo" class="definition-content">Website</span> \
			use <a href="https://github.com/wiidede/wiidede.github.io/blob/master/LICENSE" target="_blank">MIT License</a>\
			| Article content & logo use <a href="https://github.com/wiidede/wiidede-hexo-blog/blob/master/LICENSE" \
			target="_blank">CC-BY-SA-4.0 License</a>', // 博客版权信息，支持a标签
	},
	// htmlModules // 插入hmtl(广告)模块
}
