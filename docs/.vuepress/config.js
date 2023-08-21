module.exports = {
  title: '我的博客',
  description: 'Just do it!',
  head: [
    ['link', { rel: 'icon', href: '/imgs/logo.ico' }],// 指定浏览器Tab图标
  ],
  serviceWorker: true,
  base: '/',// 部署时指定存放的项目的地址
  markdown: {
    lineNumbers: true// 代码块行号显示
  },
  themeConfig: {
    logo: '/imgs/logo.ico',// 主页显示图标
    nav: [
      { text: '首页', link: '/' },// 首页地址不想指定的话就不用改，默认指向docs下面的README.md
      { text: 'Github', link: 'https://github.com/ckhr516' },// 默认指向blog下的README.md
    ],
    sidebar: [

    ],
    lastUpdated: '上次更新时间'// 页面最下方的最后更新时间戳
  }
};