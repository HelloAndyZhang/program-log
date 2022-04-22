import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { Navbar } from './configs/navbar'
import { Sidebar } from './configs/sidebar'
export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Docs',
  description: '常用文档',
  base: '/HelloAndyZhang/',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    navbar: Navbar,
    sidebar: Sidebar,
    contributors:false,
    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',

    // custom containers
    tip: '提示',
    warning: '注意',
    danger: '警告',

    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',

    // a11y
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        maxSuggestions: 10,
        // 允许搜索 Frontmatter 中的 `tags`
        getExtraFields: (page) => page.headers ?? [],
        locales: {
          '/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
})