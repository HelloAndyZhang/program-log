import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as t,j as a,z as d}from"./app-lp0sOEvl.js";const n={},c=d(`<h1 id="mktemp命令" tabindex="-1"><a class="header-anchor" href="#mktemp命令"><span>mktemp命令</span></a></h1><p><code>mktemp</code>命令用于安全地创建一个临时文件或目录，并输出其名称，<code>TEMPLATE</code>在最后一个组件中必须至少包含<code>3</code>个连续的<code>X</code>，如果未指定<code>TEMPLATE</code>，则使用<code>tmp.XXXXXXXXXX</code>作为名称在当前目录下创建相应的临时文件，<code>X</code>为生成的随机数，尾部的<code>X</code>将替换为当前进程号和随机字母的组合，文件的名称取决于模板中<code>X</code>的数量以及与现有文件冲突的数量，<code>mktemp</code>可以返回的唯一文件名的数量取决于所提供的<code>X</code>的数量，十个<code>X</code>将导致<code>mktemp</code>测试大约<code>26**10</code>个组合，<code>mktemp</code>命令创建的临时文件不会使用默认的<code>umask</code>管理权限值，其会将文件的读写权限分配给文件属主，一旦创建了文件，在<code>shell</code>脚本中就拥有了完整的读写权限，除<code>root</code>外其他人不可访问，即在创建文件时即有<code>u+rw</code>权限，创建文件夹时有<code>u+rwx</code>权限。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mktemp <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span> <span class="token punctuation">[</span>TEMPLATE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><ul><li><code>-d, --directory</code>: 创建目录，而不是文件。</li><li><code>-u, --dry-run</code>: 在<code>mktemp</code>退出之前，临时文件将被取消链接，相当于不创建任何文件或文件夹，仅输出名称，不建议使用该选项。</li><li><code>-q, --quiet</code>: 执行时若发生错误，不会输出任何信息。</li><li><code>--suffix=SUFF</code>: 将<code>STUFF</code>附加到<code>TEMPLATE</code>，<code>SUFF</code>不能包含斜线，如果<code>TEMPLATE</code>不以<code>X</code>结尾，则默认此选项。</li><li><code>-p &lt;DIR&gt;, --tmpdir &lt;DIR&gt;</code>: 生成临时文件时使用指定的目录作为目标。</li><li><code>-t</code>: 将目标文件存储在临时目录，该目录首先会选择用户的<code>TMPDIR</code>环境变量，其次是用户指定的<code>-p</code>参数选择的目录，最后的选择即<code>/tmp</code>目录，创建后会输出临时文件的全路径。</li><li><code>--help</code>: 输出帮助选项。</li><li><code>--version</code>: 输出版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>在当前目录创建临时文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mktemp tmp.XXX
<span class="token comment"># tmp.g6k</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建指定文件类型的临时文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mktemp tmp.XXX <span class="token parameter variable">--suffix</span><span class="token operator">=</span>.txt
<span class="token comment"># tmp.gSI.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在指定目录创建临时文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mktemp <span class="token parameter variable">--tmpdir</span><span class="token operator">=</span>/home tmp.XXX
<span class="token comment"># /home/tmp.HxB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.jianshu.com/p/31660ac1650f
https://www.cnblogs.com/xingmuxin/p/8440689.html
https://www.runoob.com/linux/linux-comm-mktemp.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[c];function s(i,l){return t(),a("div",null,o)}const r=e(n,[["render",s],["__file","mktemp命令.html.vue"]]),h=JSON.parse('{"path":"/MacOS/Terminal/mktemp%E5%91%BD%E4%BB%A4.html","title":"mktemp命令","lang":"zh-CN","frontmatter":{"description":"mktemp命令 mktemp命令用于安全地创建一个临时文件或目录，并输出其名称，TEMPLATE在最后一个组件中必须至少包含3个连续的X，如果未指定TEMPLATE，则使用tmp.XXXXXXXXXX作为名称在当前目录下创建相应的临时文件，X为生成的随机数，尾部的X将替换为当前进程号和随机字母的组合，文件的名称取决于模板中X的数量以及与现有文件冲突的...","head":[["meta",{"property":"og:url","content":"https://tgy.ink/MacOS/Terminal/mktemp%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"mktemp命令"}],["meta",{"property":"og:description","content":"mktemp命令 mktemp命令用于安全地创建一个临时文件或目录，并输出其名称，TEMPLATE在最后一个组件中必须至少包含3个连续的X，如果未指定TEMPLATE，则使用tmp.XXXXXXXXXX作为名称在当前目录下创建相应的临时文件，X为生成的随机数，尾部的X将替换为当前进程号和随机字母的组合，文件的名称取决于模板中X的数量以及与现有文件冲突的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mktemp命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":1.84,"words":551},"filePathRelative":"MacOS/Terminal/mktemp命令.md","localizedDate":"2022年11月3日","autoDesc":true}');export{r as comp,h as data};
