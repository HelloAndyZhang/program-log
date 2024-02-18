import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as n,j as s,z as a}from"./app-lp0sOEvl.js";const t={},c=a(`<h1 id="cut命令" tabindex="-1"><a class="header-anchor" href="#cut命令"><span>cut命令</span></a></h1><p><code>cut</code>命令用来显示行中的指定部分，其从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段写至标准输出，如果不指定<code>File</code>参数，<code>cut</code>命令将读取标准输入，该命令常用的两项功能，一是用来显示文件的内容，它依次读取由参数<code>file</code>所指明的文件，将它们的内容输出到标准输出上，其二是连接两个或多个文件，如<code>cut f1 f2 &gt; f3</code>将把文件<code>f1</code>和几的内容合并起来，然后通过输出重定向符<code>&gt;</code>的作用，将它们放入文件<code>f3</code>中，当文件较大时，文本在屏幕上迅速闪过，也就是滚屏现象，为了控制滚屏，可以执行<code>Ctrl+S</code>按键停止滚屏，按<code>Ctrl+Q</code>键可以恢复滚屏，按<code>Ctrl+C</code>键终止该命令的执行等操作。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cut</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><ul><li><code>-b</code>: 仅显示行中指定直接范围的内容。</li><li><code>-c</code>: 仅显示行中指定范围的字符。</li><li><code>-d</code>: 指定字段的分隔符，默认的字段分隔符为<code>TAB</code>。</li><li><code>-f</code>: 显示指定字段的内容。</li><li><code>-n</code>: 与<code>-b</code>选项连用，不分割多字节字符。</li><li><code>--complement</code>: 补足被选择的字节、字符或字段。</li><li><code>--out-delimiter=&lt;delimiter&gt;</code>: 指定输出内容是的字段分割符。</li><li><code>--help</code>: 显示指令的帮助信息。</li><li><code>--version</code>: 显示指令的版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>截取<code>/tmp/file.txt</code>文件每一行的第<code>3</code>个字符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /tmp/file.txt <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">3</span>
<span class="token comment"># 3</span>
<span class="token comment"># 4</span>
<span class="token comment"># 5</span>
<span class="token comment"># 6</span>
<span class="token comment"># 7</span>
<span class="token comment"># 8</span>
<span class="token comment"># 9</span>
<span class="token comment"># 0</span>
<span class="token comment"># 1</span>
<span class="token comment"># 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>截取<code>/tmp/file.txt</code>文件每一行的第<code>3-6</code>个字符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /tmp/file.txt <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">3</span>-6
<span class="token comment"># 3456</span>
<span class="token comment"># 4567</span>
<span class="token comment"># 5678</span>
<span class="token comment"># 6789</span>
<span class="token comment"># 7890</span>
<span class="token comment"># 8901</span>
<span class="token comment"># 9012</span>
<span class="token comment"># 0123</span>
<span class="token comment"># 1234</span>
<span class="token comment"># 2345</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>截取<code>/tmp/file.txt</code>文件每一行的第<code>3</code>个字符到结尾字符。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> /tmp/file.txt <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-c</span> <span class="token number">3</span>-
<span class="token comment"># 34567890</span>
<span class="token comment"># 45678901</span>
<span class="token comment"># 56789012</span>
<span class="token comment"># 67890123</span>
<span class="token comment"># 78901234</span>
<span class="token comment"># 89012345</span>
<span class="token comment"># 90123456</span>
<span class="token comment"># 01234567</span>
<span class="token comment"># 12345678</span>
<span class="token comment"># 23456789</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[c];function l(o,d){return n(),s("div",null,i)}const r=e(t,[["render",l],["__file","cut命令.html.vue"]]),u=JSON.parse('{"path":"/MacOS/Terminal/cut%E5%91%BD%E4%BB%A4.html","title":"cut命令","lang":"zh-CN","frontmatter":{"description":"cut命令 cut命令用来显示行中的指定部分，其从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段写至标准输出，如果不指定File参数，cut命令将读取标准输入，该命令常用的两项功能，一是用来显示文件的内容，它依次读取由参数file所指明的文件，将它们的内容输出到标准输出上，其二是连接两个或多个文件，如cut f1 f2 > f3将把文件f1和...","head":[["meta",{"property":"og:url","content":"https://tgy.ink/MacOS/Terminal/cut%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"cut命令"}],["meta",{"property":"og:description","content":"cut命令 cut命令用来显示行中的指定部分，其从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段写至标准输出，如果不指定File参数，cut命令将读取标准输入，该命令常用的两项功能，一是用来显示文件的内容，它依次读取由参数file所指明的文件，将它们的内容输出到标准输出上，其二是连接两个或多个文件，如cut f1 f2 > f3将把文件f1和..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"cut命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":1.56,"words":469},"filePathRelative":"MacOS/Terminal/cut命令.md","localizedDate":"2022年11月3日","autoDesc":true}');export{r as comp,u as data};
