import { hopeTheme } from 'vuepress-theme-hope';
import { Navbar } from './configs/navbar';
import { Sidebar } from './configs/sidebar';

export default hopeTheme({
  hostname: "https://tgy.ink",
  logo: '/images/icons/icons8-spouting-whale-96.png',
  docsDir: 'docs',
  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
  iconPrefix: 'iconfont icon-',
  navbar: Navbar,
  sidebar: Sidebar,
  repo: "HelloAndyZhang/HelloAndyZhang",
  // 是否在导航栏内显示仓库链接，默认为 `true`
  repoDisplay: true,
  plugins: {
    mdEnhance: {
      // enableAll: true,
      demo: true,
      // codegroup: true,
      // sub: true,
      // sup: true,
      // tasklist: true,
      // tex: true,
      presentation: true,
    },
  },
});
