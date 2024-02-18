import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as o,j as l,z as d}from"./app-lp0sOEvl.js";const c={},i=d(`<h1 id="aspell命令" tabindex="-1"><a class="header-anchor" href="#aspell命令"><span>aspell命令</span></a></h1><p><code>aspell</code>命令是一个交互式拼写检查器，其会扫描指定的文件或任何标准输入的文件，检查拼写错误，并允许交互式地纠正单词。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">aspell</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><ul><li><code>usage, -?</code>: 显示常用拼写检查命令和选项的简短摘要。</li><li><code>help</code>: 输出帮助信息。</li><li><code>version, -v</code>: 输出版本信息。</li><li><code>check file, -c file</code>: 拼写检查单个文件。</li><li><code>list</code>: 产生标准输入中拼写错误的单词的列表。</li><li><code>[dump] config</code>: 将所有当前配置选项转储到标准输出。</li><li><code>config key</code>: 将键的当前值发送到标准输出。</li><li><code>soundslike</code>: 输出输入的每个单词的等效声音。</li><li><code>munch</code>: 从单词输入列表中生成可能的词根和词缀。</li><li><code>expand [1-4]</code>: 扩展输入的每个词缀压缩词的词缀标志。</li><li><code>clean [strict]</code>: 清除输入单词列表，以便每一行都是有效单词。</li><li><code>munch-list [simple] [single|multi] [keep]</code>: 通过词缀压缩减小单词列表的大小。</li><li><code>conv from to [norm-form]</code>: 从一种编码转换为另一种编码。</li><li><code>norm (norm-map|from norm-map to) [norm-form]</code>: 执行<code>Unicode</code>规范化。</li><li><code>[dump] dicts|filters|modes</code>: 列出可用的字典，过滤器或模式。</li><li><code>dump|create|merge master|personal|repl wordlist</code>: 转储，创建或合并主，个人或替换单词列表。</li><li><code>-mode=mode</code>: 检查文件时使用的模式，可用的模式有<code>none</code>、<code>url</code>、<code>email</code>、<code>sgml</code>、<code>tex</code>、<code>texinfo</code>、<code>nroff</code>和系统上可用的任何其他模式。</li><li><code>-dont-backup</code>: 不要创建备份文件，通常如果有任何更正，则<code>aspell</code>程序会将<code>.bak</code>附加到现有文件名后，然后创建一个新的带有更正的文件，该文件是在拼写检查期间进行的。</li><li><code>--backup, -b, -x</code>: <code>aspell</code>程序通过复制并在文件名后附加<code>.bak</code>来创建备份文件，仅当命令是检查文件并且仅在进行任何拼写修改时才创建备份文件时，这才适用。</li><li><code>--sug-mode=mode</code>: 建议模式<code>=ultra|fast|normal|bad-spellers</code>。</li><li><code>-encoding=name</code>: 预期将对文档进行编码，默认值取决于当前的语言环境。</li><li><code>--master=name, -d name</code>: 要使用的词典的基本名称，如果指定了此选项，则<code>aspell</code>将使用此词典或退出。</li><li><code>--keymapping=aspell, --keymapping=ispell</code>: 要使用的键映射，默认设置为<code>aspell</code>或<code>ispell</code>使用与<code>Ispell</code>程序相同的映射。</li><li><code>--lang=string, -l string</code>: 要使用的语言，它遵循大多数系统上<code>LANG</code>环境变量的相同格式，由两个字母的<code>ISO639</code>语言代码和短划线或下划线后的可选两个字母的<code>ISO3166</code>国家代码组成，默认值基于<code>LC\\u MESSAGES</code>区域设置的值。</li><li><code>--dict-dir=directory</code>: 主词典单词列表的位置。</li><li><code>--size=string</code>: 字典单词列表的首选大小，它由两个字符的数字代码组成，用于描述列表的大小，典型值为：<code>10=tiny</code>、<code>20=really small</code>、<code>30=small</code>、<code>40=somewhat small</code>、<code>50=med</code>、<code>60=kinda large</code>、<code>70=large</code>、<code>80=huge</code>、<code>90=enormous</code>。</li><li><code>--variety=string</code>: 任何额外的信息，以区分这种类型的字典与其他可能具有相同的数量和大小的字典。</li><li><code>--jargon=string</code>: 请使用多样性选项，因为它取代术语作为一个更好的选择，这些术语将来会被删除。</li><li><code>--word-list-path=list of directories</code>: 单词列表信息文件的搜索路径。</li><li><code>--personal=file, -p file</code>: 要使用的个人单词列表的文件名。</li><li><code>--repl=file</code>: 替换列表文件名。</li><li><code>--extra-dicts=list</code>: 使用额外的字典。</li><li><code>--ignore=integer, -W integer</code>: 忽略长度大于或等于整数字符的单词。</li><li><code>--ignore-case, --dont-ignore-case</code>: 检查单词时忽略大小写。</li><li><code>--ignore-repl, --dont-ignore-repl</code>: 忽略存储替换对的命令。</li><li><code>--save-repl, --dont-save-repl</code>: 在全部保存中保存替换单词列表。</li><li><code>--conf=filename</code>: 主配置文件，此文件覆盖<code>aspell</code>的全局默认值。</li><li><code>--conf-dir=directory</code>: 主配置文件的位置。</li><li><code>--data-dir=directory</code>: 语言数据文件的位置。</li><li><code>--keyboard=keyboard</code>: 使用此键盘布局建议可能的单词，如果用户不小心按了所需正确键旁边的键，就会发生这些拼写错误。</li><li><code>--local-data-dir=directory</code>: 语言数据文件的替代位置，在数据目录之前搜索此目录。</li><li><code>--home-dir=directory</code>: 个人单词表文件的目录位置。</li><li><code>--per-conf=filename</code>: 个人配置文件，此文件覆盖全局配置文件中的选项。</li><li><code>--byte-offsets, --dont-byte-offsets</code>: 使用字节偏移量而不是字符偏移量。</li><li><code>--guess, --dont-guess, -m, -P</code>: 在管道模式下，创建不在字典中的缺少的词根/词缀组合。</li><li><code>--reverse, --dont-reverse</code>: 在管道模式下，反转建议列表的顺序。</li><li><code>--suggest, --dont-suggest</code>: 建议在管道模式下进行可能的替换，如果为假，则<code>aspell</code>将报告拼写错误，并且不尝试任何建议或可能的更正。</li><li><code>--time, --dont-time</code>: 给加载时间计时，并建议在管道模式下的时间。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><code>example.txt</code>文件内容如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>The quick brown fox jumped over the extraordinarily lazy dog.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查文件<code>example.txt</code>是否存在拼写错误，如果有拼写错误则出现选择式交互选项，如果没有拼写错误则不会出现交互式选项。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">aspell</span> <span class="token parameter variable">-c</span> sample.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>aspell</code>大量检查单词。运行时将等待用户输入，添加任意数量的单词，完成后按<code>Ctrl + D</code>完成输入，然后即可看到<code>aspell</code>将在输入的下方显示拼写错误的单词。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">aspell</span> list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),a=[i];function t(s,n){return o(),l("div",null,a)}const m=e(c,[["render",t],["__file","aspell命令.html.vue"]]),h=JSON.parse('{"path":"/MacOS/Terminal/aspell%E5%91%BD%E4%BB%A4.html","title":"aspell命令","lang":"zh-CN","frontmatter":{"description":"aspell命令 aspell命令是一个交互式拼写检查器，其会扫描指定的文件或任何标准输入的文件，检查拼写错误，并允许交互式地纠正单词。 语法 参数 usage, -?: 显示常用拼写检查命令和选项的简短摘要。 help: 输出帮助信息。 version, -v: 输出版本信息。 check file, -c file: 拼写检查单个文件。 list:...","head":[["meta",{"property":"og:url","content":"https://tgy.ink/MacOS/Terminal/aspell%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"aspell命令"}],["meta",{"property":"og:description","content":"aspell命令 aspell命令是一个交互式拼写检查器，其会扫描指定的文件或任何标准输入的文件，检查拼写错误，并允许交互式地纠正单词。 语法 参数 usage, -?: 显示常用拼写检查命令和选项的简短摘要。 help: 输出帮助信息。 version, -v: 输出版本信息。 check file, -c file: 拼写检查单个文件。 list:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"aspell命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":4.54,"words":1362},"filePathRelative":"MacOS/Terminal/aspell命令.md","localizedDate":"2022年11月3日","autoDesc":true}');export{m as comp,h as data};
