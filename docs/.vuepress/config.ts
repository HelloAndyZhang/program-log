import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";
export default defineHopeConfig({
  // 站点配置
  lang: 'zh-CN',
  title: '阑风伏雨',
  description: '常用文档',
  base: '/HelloAndyZhang/',
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    // [
    //   "script",
    //   {
    //     type: "text/javascript",
    //     src: `/js/trackEvent.js`
    //   }
    // ]
  ],
  // 主题和它的配置
  // theme: '@vuepress/theme-default',
  themeConfig,
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        maxSuggestions: 10,
        // 允许搜索 Frontmatter 中的 `tags`
        // getExtraFields: (page) => {
        //   const pages = page.headers ?? [];
        //   const pagesTitle = pages.map((page) => page.title);
        //   const tags = page.frontmatter.tag ?? [];
        //   return  [...pagesTitle,...tags]
        // },
        locales: {
          '/': {
            placeholder: '搜索文档...',
          },
        },
      },
    ],
  ],
})