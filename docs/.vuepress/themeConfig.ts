import { hopeTheme } from 'vuepress-theme-hope';
import { Navbar } from './configs/navbar';
import { Sidebar } from './configs/sidebar';

export default hopeTheme({
  hostname:"https://tgy.ink",
  logo: '/images/icons/icons-emoji-96.png',
  docsDir: 'docs',
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  iconPrefix: 'iconfont icon-',
  navbar: Navbar,
  sidebar: Sidebar,
  contributors: false,
  // page meta
  // editLinkText: '在 GitHub 上编辑此页',
  // lastUpdatedText: '上次更新',
  // contributorsText: '贡献者',
  repo: "HelloAndyZhang/HelloAndyZhang",
  // custom containers
  // tip: '提示',
  // warning: '注意',
  // danger: '警告',

  // 404 page
  // notFound: [
  //   '这里什么都没有',
  //   '我们怎么到这来了？',
  //   '这是一个 404 页面',
  //   '看起来我们进入了错误的链接',
  // ],
  // backToHome: '返回首页',
  plugins:{
    mdEnhance: {
      // enableAll: true,
      demo: true,
      // codegroup: true,
      // sub: true,
      // sup: true,
      // tasklist: true,
      // tex: true,
    },
  },
  // a11y
  // openInNewWindow: '在新窗口打开',
  // toggleDarkMode: '切换夜间模式',
  // toggleSidebar: '切换侧边栏',
});
