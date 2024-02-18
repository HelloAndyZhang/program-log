import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as s,j as e,z as a}from"./app-lp0sOEvl.js";const i={},t=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看 npm 的版本 </span>
$ <span class="token function">npm</span> <span class="token parameter variable">-v</span>  //6.4.0 <span class="token operator">&lt;&lt;</span> 安装成功会返回版本号

<span class="token comment"># 查看各个命令的简单用法</span>
$ <span class="token function">npm</span> <span class="token parameter variable">-l</span> 
 
<span class="token comment"># 查看 npm 命令列表</span>
$ <span class="token function">npm</span> <span class="token builtin class-name">help</span>

<span class="token comment"># 查看 npm 的配置</span>
$ <span class="token function">npm</span> config list <span class="token parameter variable">-l</span>

<span class="token comment"># 查看安装的模块</span>
$ <span class="token function">npm</span> <span class="token function">ls</span> 

<span class="token comment"># 卸载当前项目或全局模块 </span>
$ <span class="token function">npm</span> uninstall <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-g<span class="token punctuation">]</span> 

eg: <span class="token function">npm</span> uninstall gulp --save-dev  
    <span class="token function">npm</span> i gulp <span class="token parameter variable">-g</span>

<span class="token comment"># 查看本机的npm缓存</span>
$ <span class="token function">npm</span> config get cache

<span class="token comment"># 清空npm缓存</span>
$ <span class="token function">npm</span> cache clean <span class="token parameter variable">-f</span> 

<span class="token comment"># 查看npm当前镜像源</span>
$ <span class="token function">npm</span> config get registry  

<span class="token comment"># 设置npm镜像源为淘宝镜像</span>
$ <span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org/  

<span class="token comment"># 查看yarn当前镜像源</span>
$ <span class="token function">yarn</span> config get registry   

<span class="token comment"># 设置yarn镜像源为淘宝镜像</span>
$ <span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org/ 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="镜像源地址" tabindex="-1"><a class="header-anchor" href="#镜像源地址"><span>镜像源地址</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">npm</span> --- https://registry.npmjs.org/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="镜像源地址-1" tabindex="-1"><a class="header-anchor" href="#镜像源地址-1"><span>镜像源地址</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">npm</span> --- https://registry.npmjs.org/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),l=[t];function r(c,d){return s(),e("div",null,l)}const m=n(i,[["render",r],["__file","NPM.html.vue"]]),v=JSON.parse('{"path":"/Web/Tools/NPM.html","title":"NPM","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"NPM","description":"NPM的文档","tag":["list","uninstall","force"],"head":[["meta",{"property":"og:url","content":"https://tgy.ink/Web/Tools/NPM.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"NPM"}],["meta",{"property":"og:description","content":"NPM的文档"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:tag","content":"list"}],["meta",{"property":"article:tag","content":"uninstall"}],["meta",{"property":"article:tag","content":"force"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NPM\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":0.78,"words":235},"filePathRelative":"Web/Tools/NPM.md","localizedDate":"2022年11月3日"}');export{m as comp,v as data};
