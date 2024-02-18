import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as n,j as s,z as a}from"./app-lp0sOEvl.js";const t={},i=a(`<h1 id="fmt命令" tabindex="-1"><a class="header-anchor" href="#fmt命令"><span>fmt命令</span></a></h1><p><code>fmt</code>命令用于编排文本文件，其会从指定的文件里读取内容，将其依照指定格式重新编排后，输出到标准输出设备，若指定的文件名为<code>-</code>，则<code>fmt</code>指令会从标准输入设备读取数据。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>fmt [-WIDTH] [OPTION]... [FILE]...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><ul><li><code>-c, --crown-margin</code>: 保留前两行的缩进。</li><li><code>-p, --prefix=STRING</code>: 仅重新格式化以<code>STRING</code>开头的行，并将前缀重新附加到格式化后的行上。</li><li><code>-s, --split-only</code>: 拆分长行，但不再重新填充它们。</li><li><code>-t, --tagged-paragraph</code>: 第一行的缩进不同于第二行。</li><li><code>-u, --uniform-spacing</code>: 单词之间使用一个空格，句子后面使用两个空格。</li><li><code>-w, --width=WIDTH</code>: 最大行宽(默认为<code>75</code>列)。</li><li><code>-g, --goal=WIDTH</code>: 目标宽度(默认为宽度的<code>93％</code>)。</li><li><code>--help</code>: 输出帮助信息。</li><li><code>--version</code>: 输出版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>默认情况下，<code>fmt</code>不使用任何选项，将给定文件中存在的所有单词格式化为一行，当然默认单行最大宽度<code>75</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt
<span class="token comment"># Hello</span>
<span class="token comment"># everyone.</span>
<span class="token comment"># Have</span>
<span class="token comment"># a</span>
<span class="token comment"># nice </span>
<span class="token comment"># day.</span>

<span class="token function">fmt</span> file.txt
<span class="token comment"># Hello everyone.  Have a nice day.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>格式化文件，并使用<code>-w</code>选项指定文件行最大宽度，添加单词超出长度则将单词换行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> file.txt
<span class="token comment"># Hello</span>
<span class="token comment"># everyone.</span>
<span class="token comment"># Have</span>
<span class="token comment"># a</span>
<span class="token comment"># nice </span>
<span class="token comment"># day.</span>

<span class="token function">fmt</span> <span class="token parameter variable">-w</span> <span class="token number">10</span> file.txt
<span class="token comment"># Hello</span>
<span class="token comment"># everyone.</span>
<span class="token comment"># Have a</span>
<span class="token comment"># nice day.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-s</code>选项分割了很长的行，但是不重新填充它们。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cat file.txt
# Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It is not rude, it is not self-seeking, it is not easily angered,  it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails.

fmt -s file.txt
# Love is patient, love is kind. It does not envy, it does not boast, it
# is not proud. It is not rude, it is not self-seeking, it is not easily
# angered,  it keeps no record of wrongs. Love does not delight in evil
# but rejoices with the truth. It always protects, always trusts, always
# hopes, always perseveres. Love never fails.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[i];function o(d,c){return n(),s("div",null,l)}const p=e(t,[["render",o],["__file","fmt命令.html.vue"]]),v=JSON.parse('{"path":"/MacOS/Terminal/fmt%E5%91%BD%E4%BB%A4.html","title":"fmt命令","lang":"zh-CN","frontmatter":{"description":"fmt命令 fmt命令用于编排文本文件，其会从指定的文件里读取内容，将其依照指定格式重新编排后，输出到标准输出设备，若指定的文件名为-，则fmt指令会从标准输入设备读取数据。 语法 参数 -c, --crown-margin: 保留前两行的缩进。 -p, --prefix=STRING: 仅重新格式化以STRING开头的行，并将前缀重新附加到格式化后的...","head":[["meta",{"property":"og:url","content":"https://tgy.ink/MacOS/Terminal/fmt%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"fmt命令"}],["meta",{"property":"og:description","content":"fmt命令 fmt命令用于编排文本文件，其会从指定的文件里读取内容，将其依照指定格式重新编排后，输出到标准输出设备，若指定的文件名为-，则fmt指令会从标准输入设备读取数据。 语法 参数 -c, --crown-margin: 保留前两行的缩进。 -p, --prefix=STRING: 仅重新格式化以STRING开头的行，并将前缀重新附加到格式化后的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"fmt命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":1.6,"words":480},"filePathRelative":"MacOS/Terminal/fmt命令.md","localizedDate":"2022年11月3日","autoDesc":true}');export{p as comp,v as data};
