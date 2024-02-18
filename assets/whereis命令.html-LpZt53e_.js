import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as a,j as s,z as n}from"./app-lp0sOEvl.js";const i={},t=n(`<h1 id="whereis命令" tabindex="-1"><a class="header-anchor" href="#whereis命令"><span>whereis命令</span></a></h1><p><code>whereis</code>命令用于查找文件，该指令会在特定目录中查找符合条件的文件，该指令只能用于查找二进制文件、源代码文件和<code>man</code>手册页，一般文件的定位需使用<code>locate</code>或<code>find</code>命令。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">whereis</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><ul><li><code>-b</code>: 仅搜索二进制文件。</li><li><code>-B &lt;dirs&gt;</code>: 更改或限制<code>whereis</code>搜索二进制文件的位置。</li><li><code>-m</code>: 仅搜索源。</li><li><code>-M &lt;dirs&gt;</code>: 更改或限制<code>whereis</code>搜索手册部分的位置。</li><li><code>-s</code>: 仅搜索源。</li><li><code>-S &lt;dirs&gt;</code>: 更改或限制<code>whereis</code>搜索源的位置。</li><li><code>-f</code>: 不显示文件名前的路径名称。</li><li><code>-u</code>: 搜索不寻常的条目，如果文件没有每种请求类型的一个条目，则该文件被认为是不寻常的，即查找不包含指定类型的文件。</li><li><code>-l</code>: 输出有效的查找路径。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>列出<code>whereis</code>命令搜索的目录，默认情况下<code>whereis</code>在环境变量中列出的硬编码路径和目录中搜索命令的文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">whereis</span> <span class="token parameter variable">-l</span>
<span class="token comment"># bin: /usr/bin</span>
<span class="token comment"># bin: /usr/sbin</span>
<span class="token comment"># bin: /usr/lib</span>
<span class="token comment"># ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取有关<code>bash</code>命令的信息，输出的<code>bash</code>是要获取其信息的命令，<code>/bin/bash</code>是二进制文件的路径，<code>/etc/bash.bashrc</code>源文件以及<code>/usr/share/man/man1/bash.1.gz</code>手册页，如果要搜索的命令不存在，<code>whereis</code>将仅打印命令名称。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">whereis</span> <span class="token function">bash</span>
<span class="token comment"># bash: /bin/bash /etc/bash.bashrc /usr/share/man/man1/bash.1.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为<code>whereis</code>命令同时查询<code>netcat</code>与<code>uptime</code>，输出将包含有关<code>netcat</code>和<code>uptime</code>命令的信息。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">whereis</span> netcat <span class="token function">uptime</span>
<span class="token comment"># netcat: /bin/netcat /usr/share/man/man1/netcat.1.gz</span>
<span class="token comment"># uptime: /usr/bin/uptime /usr/share/man/man1/uptime.1.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.computerhope.com/unix/uwhereis.htm
https://linuxize.com/post/whereis-command-in-linux/
https://www.runoob.com/linux/linux-comm-whereis.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[t];function d(o,l){return a(),s("div",null,c)}const p=e(i,[["render",d],["__file","whereis命令.html.vue"]]),m=JSON.parse('{"path":"/MacOS/Terminal/whereis%E5%91%BD%E4%BB%A4.html","title":"whereis命令","lang":"zh-CN","frontmatter":{"description":"whereis命令 whereis命令用于查找文件，该指令会在特定目录中查找符合条件的文件，该指令只能用于查找二进制文件、源代码文件和man手册页，一般文件的定位需使用locate或find命令。 语法 参数 -b: 仅搜索二进制文件。 -B <dirs>: 更改或限制whereis搜索二进制文件的位置。 -m: 仅搜索源。 -M <dirs>: 更改...","head":[["meta",{"property":"og:url","content":"https://tgy.ink/MacOS/Terminal/whereis%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"whereis命令"}],["meta",{"property":"og:description","content":"whereis命令 whereis命令用于查找文件，该指令会在特定目录中查找符合条件的文件，该指令只能用于查找二进制文件、源代码文件和man手册页，一般文件的定位需使用locate或find命令。 语法 参数 -b: 仅搜索二进制文件。 -B <dirs>: 更改或限制whereis搜索二进制文件的位置。 -m: 仅搜索源。 -M <dirs>: 更改..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"whereis命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":1.31,"words":393},"filePathRelative":"MacOS/Terminal/whereis命令.md","localizedDate":"2022年11月3日","autoDesc":true}');export{p as comp,m as data};
