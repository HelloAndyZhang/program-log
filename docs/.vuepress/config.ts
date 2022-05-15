import { defineUserConfig } from 'vuepress';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { searchPlugin } from '@vuepress/plugin-search'
import { path } from '@vuepress/utils';
import themeConfig from "./themeConfig";
const base = '/HelloAndyZhang/'
export default defineUserConfig({
  // 站点配置
  lang: 'zh-CN',
  title: ' ', //阑风伏雨
  description: ' ', //常用文档
  // base,
  head: [
    /** 移动端禁止缩放 */
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, minimal-ui' }],
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
  alias: {
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

  markdown: {
    code: {
      lineNumbers: false,
    },
  },
  // 主题和它的配置
  // theme: '@vuepress/theme-default',
  theme: themeConfig,
  plugins: [
    // searchPlugin({
    //   maxSuggestions: 10,
    //   // 允许搜索 Frontmatter 中的 `tags`
    //   // getExtraFields: (page) => {
    //   //   const pages = page.headers ?? [];
    //   //   const pagesTitle = pages.map((page) => page.title);
    //   //   const tags = page.frontmatter.tag ?? [];
    //   //   return  [...pagesTitle,...tags]
    //   // },
    //   locales: {
    //     '/': {
    //       placeholder: '搜索文档',
    //     },
    //   },
    // })

    docsearchPlugin({
      apiKey: 'eb4e6af4f85378c063c2fb82ffa621fe',
      indexName: 'docs-site',
      appId: '11IBYCSAO0',
      placeholder: "搜索文档",
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询条件",
            resetButtonAriaLabel: "清除查询条件",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除",
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "你可能需要检查你的网络连接",
          },
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
            searchByText: "搜索提供者",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈",
          },
        },

      },
    }),
  ],
})


