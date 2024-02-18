import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{i,j as a,z as n}from"./app-lp0sOEvl.js";const t={},s=n(`<h1 id="wakatime-配置" tabindex="-1"><a class="header-anchor" href="#wakatime-配置"><span>wakatime 配置</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
name: WakaTime

on:
  workflow_dispatch:
  push:
    branches:
      - main
  schedule:
    - cron: &#39;0 0 * * *&#39;

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: athul/waka-readme@master
        with:
          WAKATIME_API_KEY: \${{ secrets.WAKATIME_API_KEY }}
          SHOW_TITLE: true
          SHOW_TOTAL: true
          # BLOCKS: ⣀⣄⣤⣦⣶⣷⣿
          # BLOCKS: ○◔◑◕● □
          BLOCKS: ▢⚀⚁⚂⚃⚄⚅
          # TIME_RANGE: last_30_days
          TIME_RANGE: last_7_days
          COMMIT_MESSAGE: Updated the README
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[s];function l(r,m){return i(),a("div",null,d)}const v=e(t,[["render",l],["__file","wakaTime.html.vue"]]),u=JSON.parse('{"path":"/Web/CI/wakaTime.html","title":"wakatime 配置","lang":"zh-CN","frontmatter":{"title":"wakatime 配置","description":"wakatime 配置 ","head":[["meta",{"property":"og:url","content":"https://tgy.ink/Web/CI/wakaTime.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"wakatime 配置"}],["meta",{"property":"og:description","content":"wakatime 配置 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"wakatime 配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":0.16,"words":47},"filePathRelative":"Web/CI/wakaTime.md","localizedDate":"2022年11月3日","autoDesc":true}');export{v as comp,u as data};
