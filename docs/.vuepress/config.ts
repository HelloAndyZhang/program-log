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
    sidebar: Sidebar
  },
})