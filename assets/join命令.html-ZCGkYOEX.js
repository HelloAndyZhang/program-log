import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as n,j as a,z as s}from"./app-lp0sOEvl.js";const i={},d=s(`<h1 id="join命令" tabindex="-1"><a class="header-anchor" href="#join命令"><span>join命令</span></a></h1><p><code>join</code>命令用于将两个文件中，指定栏位内容相同的行连接起来。其首先找出两个文件中指定栏位内容相同的行，并加以合并，再输出到标准输出设备。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">join</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. FILE1 FILE2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><ul><li><code>-a FILENUM</code>: 从<code>FILENUM</code>打印不成对的行，其中<code>FILENUM</code>是<code>1</code>或<code>2</code>，对应于<code>FILE1</code>或<code>FILE2</code>。</li><li><code>-e EMPTY</code>: 将缺少的输入字段替换为空。</li><li><code>-i, --ignore-case</code>: 比较字段时忽略大小写的差异。</li><li><code>-j FIELD</code>: 相当于<code>-1 FIELD -2 FIELD</code>。</li><li><code>-o FORMAT</code>: 构造输出线时遵守<code>FORMAT</code>。</li><li><code>-t CHAR</code>: 使用<code>CHAR</code>作为输入和输出字段分隔符。</li><li><code>-v FILENUM</code>: 类似于<code>-a FILENUM</code>，但不连接输出行。</li><li><code>-1 FIELD</code>: 加入文件<code>1</code>的这个<code>FIELD</code>。</li><li><code>-2 FIELD</code>: 加入文件<code>2</code>的这个<code>FIELD</code>。</li><li><code>--check-order</code>: 检查输入是否正确排序，即使所有输入行都可以配对。</li><li><code>--nocheck-order</code>: 不要检查输入是否正确排序。</li><li><code>--header</code>: 将每个文件的第一行视为字段标题，无需尝试将它们配对即可打印它们。</li><li><code>--help</code>: 显示帮助信息。</li><li><code>--version</code>: 显示版本信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><code>file1.txt</code>与<code>file2.txt</code>文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># file1.txt
1 AAYUSH
2 APAAR
3 HEMANT
4 KARTIK
5 TIM

# file2.txt
1 101
2 102
3 103
4 104
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>join</code>命令合并文件，为了合并两个文件，文件必须具有一些公共字段，此时两个文件中的公共字段均带有编号<code>1、2...</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">join</span> file1.txt file2.txt
<span class="token comment"># 1 AAYUSH 101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>-a</code>选项打印<code>FILE1</code>中已成对的行并链接以及不成对的行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">join</span> file1.txt file2.txt <span class="token parameter variable">-a</span> <span class="token number">1</span>
<span class="token comment"># 1 AAYUSH 101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
<span class="token comment"># 5 TIM</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>-v</code>选项打印<code>FILE1</code>中不成对的行。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">join</span> file1.txt file2.txt <span class="token parameter variable">-v</span> <span class="token number">1</span>
<span class="token comment"># 5 TIM</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>join</code>会在第一个公共字段上组合文件行，该字段是默认值。但是这两个文件中的公共值不一定总是第一个列，所以<code>join</code>可以使用<code>-1, -2</code>指定公共值位置。<code>-1</code>和<code>-2</code>表示第一个和第二个文件，这些选项需要一个数字参数，该参数引用相应文件的连接字段。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>\`file1.txt\`与\`file2.txt\`文件内容如下：
# file1.txt
AAYUSH 1 
APAAR 2
HEMANT 3
KARTIK 4
TIM 5

# file2.txt
101 1
102 2
103 3
104 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">join</span> <span class="token parameter variable">-1</span> <span class="token number">2</span> <span class="token parameter variable">-2</span> <span class="token number">2</span> file1.txt file2.txt
<span class="token comment"># 1 AAYUSH  101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面的示例，我们直接使用<code>-j</code>参数也可以实现。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">join</span> <span class="token parameter variable">-j</span> <span class="token number">2</span> file1.txt file2.txt
<span class="token comment"># 1 AAYUSH  101</span>
<span class="token comment"># 2 APAAR 102</span>
<span class="token comment"># 3 HEMANT 103</span>
<span class="token comment"># 4 KARTIK 104</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[d];function c(t,o){return n(),a("div",null,l)}const p=e(i,[["render",c],["__file","join命令.html.vue"]]),v=JSON.parse('{"path":"/MacOS/Terminal/join%E5%91%BD%E4%BB%A4.html","title":"join命令","lang":"zh-CN","frontmatter":{"description":"join命令 join命令用于将两个文件中，指定栏位内容相同的行连接起来。其首先找出两个文件中指定栏位内容相同的行，并加以合并，再输出到标准输出设备。 语法 参数 -a FILENUM: 从FILENUM打印不成对的行，其中FILENUM是1或2，对应于FILE1或FILE2。 -e EMPTY: 将缺少的输入字段替换为空。 -i, --ignore-...","head":[["meta",{"property":"og:url","content":"https://tgy.ink/MacOS/Terminal/join%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"join命令"}],["meta",{"property":"og:description","content":"join命令 join命令用于将两个文件中，指定栏位内容相同的行连接起来。其首先找出两个文件中指定栏位内容相同的行，并加以合并，再输出到标准输出设备。 语法 参数 -a FILENUM: 从FILENUM打印不成对的行，其中FILENUM是1或2，对应于FILE1或FILE2。 -e EMPTY: 将缺少的输入字段替换为空。 -i, --ignore-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"join命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"MacOS/Terminal/join命令.md","localizedDate":"2022年11月3日","autoDesc":true}');export{p as comp,v as data};
