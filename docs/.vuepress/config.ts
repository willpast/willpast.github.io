/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块
import MarkdownItKatex from 'markdown-it-katex'; // 数据公式显示
import { readFileList, readTotalFileWords, readEachFileWords } from './webSiteInfo/readFile';

const DOMAIN_NAME = 'willpast.github.io' // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}` // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm主题包
  // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题包

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Cyan's blog",
      description: '个人博客',
    }
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: '首页', link: '/'},
      { text: '导读', link: '/overview/' },
      {
	      text: 'Java',
	      link: '/java/',
	      items: [
	        { text: 'Java基础 - 基础知识',
	          items: [
              { text: '基础知识 - 导读', link: '/overview/#面向对象与java基础' },
	            { text: '面向对象', link: '/pages/java-basic-oop/' },
	        	  { text: '知识点', link: '/pages/java-basic-lan-basic/' },
	          ]
	        },
		      { text: 'Java进阶 - 集合框架',
            items: [
              { text: '集合框架 - 导读', link: '/overview/#java进阶-集合框架' },
              { text: 'Collection - 类关系图', link: '/pages/java-collection-overview/' },
            ]
		      },
		      { text: 'Java进阶 - 并发框架',
            items: [
              { text: '并发框架 - 导读', link: '/pages/java-thread-x-overview/' },
              { text: 'Java 并发 - 理论基础', link: '/pages/java-thread-x-theorty/' },
              { text: 'Java 并发 - 线程基础', link: '/pages/java-thread-x-thread-basic/' },
              { text: 'JUC - 类汇总', link: '/pages/java-thread-x-juc-overview/' },
              
            ]
		      },
          { text: 'Java进阶 - IO框架',
            items: [
              { text: 'IO框架 - 导读', link: '/pages/java-io-overview/' },
              { text: 'IO 基础', link: '/pages/java-io-basic-usage/' },
              { text: 'BIO 基础', link: '/pages/java-io-bio/' },
              { text: 'NIO 基础', link: '/pages/java-io-nio/' },
              { text: 'AIO 基础', link: '/pages/java-io-aio/' },
              
            ]
		      },
          { text: 'Java进阶 - JVM相关',
            items: [
              { text: 'JVM相关 - 导读', link: '/pages/java-jvm-overview/' },
              { text: 'Java 类字节码', link: '/pages/java-jvm-class/' },
              { text: 'JVM 内存模型', link: '/pages/java-jvm-jmm/' },
              { text: 'JVM 垃圾回收', link: '/pages/java-jvm-gc/' },
              { text: 'Java 调试排错', link: '/pages/java-jvm-param/' },              
            ]
		      },
          { text: 'Java进阶 - 新版本特性',
            items: [
              { text: 'java 8 新特性 - 导读', link: '/pages/java8-overview/' },
              { text: 'Java 8+ 特性 - 导读', link: '/pages/java8+-overview/' },            
              { text: 'Java 8 升Java 11 重要特性 - 必读', link: '/pages/java9-11/' },
              { text: 'Java 11 升Java 17 重要特性 - 必读', link: '/pages/java12-17/' },                           
            ]
		      },          
	      ],
	    },
      {
	      text: '算法',
	      link: '/algorithm/',
        items: [
          { text: '基础算法', 
            items: [
              {text: '数据结构基础 - 导读', link: '/pages/alg-basic-overview/'},
              {text: '数据结构进阶 - 导读', link: '/pages/ef847c/'},
              {text: '常见排序算法 - 导读', link: '/pages/alg-sort-overview/'},
              {text: '算法思想 - 导读', link: '/pages/alg-core-overview/'},                        
            ]
		      },
          { text: '领域算法', 
            items: [
              { text: '领域算法 - 导读', link: '/pages/alg-domain-overview/'},
              { text: '安全算法', link: '/pages/alg-domain-security-degist/'},
              { text: '字符串匹配算法', link: '/pages/alg-domain-char-match-overview/' },
              { text: '大数据处理算法', link: '/pages/alg-domain-bigdata-overview/'},
              { text: '分布式系统算法', link: '/pages/alg-domain-distribute-overview/'},
              { text: '其它算法相关', link: '/pages/alg-other-mind/'},                          
            ]
		      },

        ],
	    },
      {
	      text: '数据库',
	      link: '/database/',
	      items: [
	        { text: '数据库基础与原理',
	          items: [
	            { text: '数据库基础和SQL - 导读', link: '/pages/db-sql-overview/' },
	          ]
	        },
		      { text: 'SQL 数据库 ',
            items: [
              { text: 'MySQL - 导读', link: '/pages/db-mysql-overview/' },
            ]
		      },
		      { text: 'NoSQL 数据库',
            items: [
              { text: 'Redis - 导读', link: '/pages/db-redis-overview/' },
              { text: 'MongoDB - 导读', link: '/pages/db-mongo-overview/' },
              { text: 'ElasticSearch - 导读', link: '/pages/db-es-overview/' },
            ]
		      }
	      ],
	    },
      {
		    text: '系统开发',
		    link: '/devsys/',
		    items: [
		      { text: '常用类库 - 导读', link: '/pages/dev-package-overview/' },
          { text: '代码质量 - 导读', link: '/pages/dev-qt-overview/' },
          { text: '网络协议 - 导读', link: '/pages/dev-protocol-overview/' },
          { text: '开发安全 - 导读', link: '/pages/dev-security-overview/' },
          { text: '常用技巧 - 正则表达式', link: '/pages/dev-regex-usage/' },
		    ], 
	    },      
      {
		    text: '数据开发',
		    link: '/devdata/',
		    items: [
		      { text: '数据资产化及入表', link: '/pages/6de9b5/' },
		    ], 
	    },
      {
		    text: '架构',
		    link: '/architecture/',
		    items: [
		      { text: '架构基础 导读', link: '/pages/arch-overview/' },
          { text: '分布式系统 导读', link: '/pages/arch-d-overview/' },
          { text: '微服务系统 导读', link: '/pages/arch-m-overview/' },
		    ], 
	    },
      {
		    text: '方法论',
		    link: '/theory/',
		    items: [
		      { text: '开发理论 导读', link: '/pages/dev-th-overview/' },
          { text: '开源协议 导读', link: '/pages/dev-open-overview/' },
          { text: '代码规范 导读', link: '/pages/dev-code-style-overview/' },
          { text: '开发流程 导读', link: '/pages/dev-agile-overview/' },
          { text: '设计模式 导读', link: '/pages/dev-pattern-overview/' },
          { text: '系统认证 导读', link: '/pages/dev-cart-overview/' },
		    ], 
	    },
	    {
	      text: '工具箱',
	      link: '/tools/',
	      items: [
          { text: '百宝箱',
          items: [
            { text: '百宝箱', link: '/pages/tool-resource/' },
          ]
          },
          { text: '官方文档',
            items: [
              { text: '官方文档', link: '/pages/tool-tech-doc/' },
            ]
		      },
	        { text: '常用开发工具',
	          items: [
              
	            { text: 'Git', link: '/pages/tool-git/' },
              { text: 'Markdown', link: '/pages/tool-markdown/' },              
	          ]
	        },
          { text: '前端开发工具',
	          items: [
              { text: '常用前端工具', link: '/pages/tool-fe-com/' },
	            { text: 'npm', link: '/pages/tool-npm/' },
              { text: 'yaml', link: '/pages/tool-yaml/' },
	          ]
	        },
	      ],
	    },
	    {
		    text: '项目',
		    link: '/project/',
		    items: [
		      { text: '他山之玉-研学', link: '/pages/f2a556/' },
		      { text: '可以攻石-实战', link: '/pages/f2a556/' },
		    ], 
	    },
      {
        text: '更多',
        link: '/more/',
        items: [
          { text: '学习', link: '/pages/f2a556/' },
          { text: '面试', link: '/pages/576b1f/' },
          { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },           
          { text: '友情链接', link: '/friends/' },
        ],
      },      
      {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        // items: [
        //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
        //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
        //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
        // ],
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
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/e-logo-head.png', // 导航栏logo
    repo: 'willpast/willpast.github.io', // 导航栏右侧生成Github链接 ,若注释则文件中编辑不显示
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    // docsBranch: 'master', // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: '编辑',

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    // pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // bodyBgImg: [
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
    //   'https://jsd.cdn.zzko.cn/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
    // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~1.0, 默认0.5
    // bodyBgImgInterval: 15, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: 'structuring',

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: 'Cyan', // 必需
      link: 'https://github.com/willpast', // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      // avatar: 'https://cdn.jsdelivr.net/gh/willpast/image/blog/starfish.png',
	  avatar: '/img/e-logo.png',
      name: 'Cyan',
      slogan: 'This too shall pass',
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:lhhd_llz@163.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/willpast',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2014, // 博客创建年份
      copyrightInfo:
        'Cyan | <a href="https://github.com/willpast/willpast.github.io/blob/master/LICENSE" target="_blank">MIT License</a>', // 博客版权信息、备案信息等，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: 'Cyan',
        link: 'https://github.com/willpast'
      }
    },

    // 自定义hmtl(广告)模块
    htmlModules,

    // 站点配置（首页 & 文章页）
    blogInfo: {
      blogCreate: '2024-04-16', // 博客创建时间
      indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },

  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/e-logo-ico.png' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '个人博客,技术,学习',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）

    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],      // 让md支持数学公式
    ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }],  // 让md支持数学公式

    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }], // 阿里在线矢量图
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }], // 解决 chrome 网站统计不准确问题

  ],


  // 插件配置
  plugins: <UserPlugins>[
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE,
      },
    ],

    'vuepress-plugin-baidu-autopush', // 百度自动推送
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
          },
        ],
      }
    ],

    [
      'one-click-copy', // 代码块复制按钮
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: '3fd6a59736f73d4e2f1e',
          clientSecret: 'dae90fdb2a54c9f91c8ecc1e1f9e8dca9e59309b',
          repo: 'willpast.github.io', // GitHub 仓库
          owner: 'willpast', // GitHub仓库所有者
          admin: ['willpast'], // 对仓库有写权限的人
          // distractionFreeMode: true,
          pagerDirection: 'last', // 'first'正序 | 'last'倒序
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
          title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
          labels: ['gitalk'], // GitHub issue 的标签
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      },
    ],
    [
    	{
        	name: 'custom-plugins',
        	globalUIComponents: ["PageInfo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    	}
    ],
  ], 

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    extendMarkdown: (md) => {
      md.use(MarkdownItKatex);
      // md.linkify.set({ fuzzyEmail: false }); // md自动生成链接置为false
    },

  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts',
  ]
})
