import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as o,j as c,z as d}from"./app-lp0sOEvl.js";const i={},n=d(`<h1 id="pico命令" tabindex="-1"><a class="header-anchor" href="#pico命令"><span>pico命令</span></a></h1><p><code>pico</code>是一个简单易用、以显示导向为主的文字编辑程序，具有<code>pine</code>电子邮件编写器的风格。在现代<code>Linux</code>系统上，<code>nano</code>即<code>pico</code>的<code>GNU</code>版本是默认安装的，在使用上和<code>pico</code>一模一样。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>nano [OPTIONS] [[+LINE[,COLUMN]] FILE]...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><ul><li><code>+LINE[,COLUMN]</code>: 启动时将光标放置在行号行和列号列，而不是默认的第<code>1</code>行第<code>1</code>列。</li><li><code>-?</code>: 与<code>-h</code>相同。</li><li><code>-A, --smarthome</code>: 使<code>Home</code>键更智能，如果在一行中非空格字符的开头但在任何地方按<code>Home</code>键，则光标将跳到该开头(向前或向后)，如果光标已经在该位置，它将跳到该行的真实开头。</li><li><code>-B, --backup</code>: 保存文件时，将以前版本的文件备份到以<code>~</code>为后缀的当前文件名。</li><li><code>-C dir, --backupdir=dir</code>: 如果启用了文件备份，请设置<code>nano</code>放置唯一备份文件的目录。</li><li><code>-D, --boldtext</code>: 使用粗体文本而不是反向视频文本。</li><li><code>-E, --tabstospaces</code>: 将键入的制表符转换为空格。</li><li><code>-F, --multibuffer</code>: 如果可用，启用多个文件缓冲区。</li><li><code>-H, --historylog</code>: 记录搜索并将字符串替换为<code>~/.nano_history</code>，如果有<code>nanorc</code>支持，则可以在以后的会话中检索它们。</li><li><code>-I, --ignorercfiles</code>: 如果有<code>nanorc</code>支持，不要检索<code>SYSCONFDIR/nanorc</code>或<code>~/.nanorc</code>。</li><li><code>-K, --rebindkeypad</code>: 解释数字小键盘的键，以便它们都可以正常工作。如果不需要，则不需要使用此选项，因为启用此选项后，鼠标支持将无法正常工作。</li><li><code>-L, --nonewlines</code>: 不要在文件末尾添加换行符。</li><li><code>-N, --noconvert</code>: 禁止从<code>DOS/Mac</code>格式自动转换文件。</li><li><code>-O, --morespace</code>: 使用标题栏下方的空白行作为额外的编辑空间。</li><li><code>-Q str, --quotestr=str</code>: 设置引号字符串以进行证明。如果有扩展的正则表达式支持，则默认值为<code>^([ \\t]*[#:&gt;\\|}])+</code>，否则为<code>&gt;</code>。请注意<code>\\t</code>代表<code>Tab</code>。</li><li><code>-R, --restricted</code>: 限制模式，不读取或写入命令行中未指定的任何文件，读取任何<code>nanorc</code>文件，允许挂起，允许将文件附加到其他名称(如果已经有文件名)或以其他名称保存，或者使用备份文件或拼写检查。也可以通过使用以<code>r</code>开头的任何名称调用<code>nano</code>(例如<code>rnano</code>)进行访问。</li><li><code>-S, --smooth</code>: 启用平滑滚动，文本将逐行滚动，而不是通常的逐块行为。</li><li><code>-T cols, --tabsize=cols</code>: 将选项卡的大小(宽度)设置为列，<code>cols</code>的值必须大于<code>0</code>，默认值为<code>8</code>。</li><li><code>-U, --quickblank</code>: 快速清除状态栏，<code>1</code>次按键而不是<code>25</code>次按键后，状态栏消息将消失，请注意<code>-c</code>会覆盖此内容。</li><li><code>-V, --version</code>: 输出版本信息。</li><li><code>-W, --wordbounds</code>: 通过将标点符号视为单词的一部分，可以更准确地检测单词边界。</li><li><code>-Y str, --syntax=str</code>: 从<code>nanorc</code>中指定要使用的特定语法高亮显示(如果可用)。</li><li><code>-c, --const</code>: 不断显示光标位置，请注意这将覆盖<code>-U</code>。</li><li><code>-d, --rebinddelete</code>: 以不同的方式解释<code>Delete</code>键，以便退格键和<code>Delete</code>键都能正常工作，只有当退格符在系统上的作用类似于<code>Delete</code>时，您才需要使用此选项。</li><li><code>-h, --help</code>: 输出帮助信息。</li><li><code>-i, --autoindent</code>: 将新行缩进到前一行的缩进中，在编辑源代码时很有用。</li><li><code>-k, --cut</code>: 启用从光标到行尾的剪切。</li><li><code>-l --nofollow</code>: 如果正在编辑的文件是符号链接，请用新文件替换该链接，而不是跟随它,，也许适合在<code>/tmp</code>中编辑文件。</li><li><code>-m, --mouse</code>: 启用鼠标支持(如果适用于您的系统)。设置快捷方式时，可以用鼠标双击鼠标来执行标记，鼠标将在<code>X</code>窗口系统中工作，并在<code>gpm</code>运行时在控制台上工作。</li><li><code>-o dir, --operatingdir=dir</code>: 设置操作目录，使<code>nano</code>设置类似于<code>chroot</code>。</li><li><code>-p, --preserve</code>: 保留<code>XON</code>和<code>XOFF</code>序列<code>^Q</code>和<code>^S</code>，以便它们被终端捕获。</li><li><code>-r cols, --fill=cols</code>: 在列<code>cols</code>处换行，如果此值等于或小于<code>0</code>，则将在屏幕的宽度减去<code>cols</code>列的宽度处进行换行，如果调整了屏幕大小，则换行点将随着屏幕的宽度而变化，默认值为<code>-8</code>。</li><li><code>-s prog, --speller=prog</code>: 启用备用拼写检查程序命令。</li><li><code>-t, --tempfile</code>: 始终保存更改的缓冲区而无提示，与<code>Pico</code>的<code>-t</code>选项相同。</li><li><code>-v, --view</code>: 查看文件(只读)模式。</li><li><code>-w, --nowrap</code>: 禁用长行换行。</li><li><code>-x, --nohelp</code>: 禁用编辑器底部的帮助屏幕。</li><li><code>-z, --suspend</code>: 启用暂停功能。</li><li><code>-a, -b, -e, -f, -g, -j</code>: 由于与<code>Pico</code>的兼容性而被忽略。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>使用<code>nano</code>编辑文件，根据操作提示编辑文件。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">nano</span> file.txt

<span class="token comment"># ^G Get Help</span>
<span class="token comment"># ^O WriteOut</span>
<span class="token comment"># ^R Read File</span>
<span class="token comment"># ^Y Prev Page</span>
<span class="token comment"># ^K Cut Text</span>
<span class="token comment"># ^C Cur Pos</span>
<span class="token comment"># ^X Exit</span>
<span class="token comment"># ^J Justify</span>
<span class="token comment"># ^W Where Is</span>
<span class="token comment"># ^V Next Page</span>
<span class="token comment"># ^U UnCut Text</span>
<span class="token comment"># ^T To Spell</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.runoob.com/linux/linux-comm-pico.html
https://www.tutorialspoint.com/unix_commands/nano.htm
https://www.geeksforgeeks.org/nano-text-editor-in-linux/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[n];function t(a,s){return o(),c("div",null,l)}const m=e(i,[["render",t],["__file","pico命令.html.vue"]]),u=JSON.parse('{"path":"/MacOS/Terminal/pico%E5%91%BD%E4%BB%A4.html","title":"pico命令","lang":"zh-CN","frontmatter":{"description":"pico命令 pico是一个简单易用、以显示导向为主的文字编辑程序，具有pine电子邮件编写器的风格。在现代Linux系统上，nano即pico的GNU版本是默认安装的，在使用上和pico一模一样。 语法 参数 +LINE[,COLUMN]: 启动时将光标放置在行号行和列号列，而不是默认的第1行第1列。 -?: 与-h相同。 -A, --smartho...","head":[["meta",{"property":"og:url","content":"https://tgy.ink/MacOS/Terminal/pico%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"pico命令"}],["meta",{"property":"og:description","content":"pico命令 pico是一个简单易用、以显示导向为主的文字编辑程序，具有pine电子邮件编写器的风格。在现代Linux系统上，nano即pico的GNU版本是默认安装的，在使用上和pico一模一样。 语法 参数 +LINE[,COLUMN]: 启动时将光标放置在行号行和列号列，而不是默认的第1行第1列。 -?: 与-h相同。 -A, --smartho..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pico命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":4.12,"words":1236},"filePathRelative":"MacOS/Terminal/pico命令.md","localizedDate":"2022年11月3日","autoDesc":true}');export{m as comp,u as data};
