import { defineUserConfig } from "vuepress/cli";
import { getDirname, path } from "vuepress/utils";
import { searchPlugin } from '@vuepress/plugin-search'
import themeConfig from "./themeConfig";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // 站点配置
  lang: 'zh-CN',
  title: '阑风伏雨', //阑风伏雨
  description: '常用文档', //常用文档
  head: [
    /** 移动端禁止缩放 */
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, minimal-ui' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/icons8-bullseye-emoji-16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/icons8-bullseye-emoji-32.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: `/images/icons/icons8-bullseye-emoji-96.png`,
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
  ],
  alias: {
    "@swiper": path.resolve(__dirname, "components/swiper.vue"),
    // '@MigrationTool': path.resolve(__dirname, './components/MigrationTool.vue'),
    // '@theme-hope/components/HomePage': path.resolve(
    //   __dirname,
    //   './components/HomePage'
    // ),
    // '@theme-hope/components/NormalPage': path.resolve(
    //   __dirname,
    //   './components/NormalPage'
    // ),
  },

  // markdown: {
  //   code: {
  //     lineNumbers: false,
  //   },
  // },
  theme: themeConfig,
  plugins: [
    searchPlugin({
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => page.frontmatter.tags ?? [],
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],
})


