import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";
const base = '/HelloAndyZhang/'
export default defineHopeConfig({
  // 站点配置
  lang: 'zh-CN',
  title: '阑风伏雨',
  description: '常用文档',
  // base,
  head: [
    /** 移动端禁止缩放 */
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, minimal-ui'}],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '64x64',
        href: `/images/icons/icons8-emoji-64.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/icons8-emoji-32.png`,
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    // [
    //   "link",
    //   {
    //     rel: "icon",
    //     href:"https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-emoji-emoji-justicon-lineal-color-justicon-9.png"
    //   }
    // ],
    [
      "script",
      {
        type: "text/javascript",
        src: `/js/trackEvent.js`,
      }
    ],
    [
      "script",
      {
        rel: "text/javascript",
        // href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
      "console.log('hello world')"
    ],
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
            placeholder: '搜索文档',
          },
        },
      },
    ],
  ],
})