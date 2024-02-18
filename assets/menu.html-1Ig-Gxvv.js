import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{g as n,i,j as h,u as t,A as d,l as r,z as l}from"./app-lp0sOEvl.js";const o={},s=l('<h1 id="_1-最常用终端命令" tabindex="-1"><a class="header-anchor" href="#_1-最常用终端命令"><span>1.最常用终端命令</span></a></h1><p>Mac OS系统有些文件默认隐藏,如果需要显示,可以通过终端显示隐藏文件或文件夹</p><ul><li>显示隐藏路径的终端命令:defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder</li><li>取消隐藏路径的终端命令:defaults write com.apple.finder AppleShowAllFiles -boolean false ; killall Finder</li></ul><h1 id="_2-其他终端命令" tabindex="-1"><a class="header-anchor" href="#_2-其他终端命令"><span>2.其他终端命令</span></a></h1><h2 id="_1-目录操作" tabindex="-1"><a class="header-anchor" href="#_1-目录操作"><span>1.目录操作</span></a></h2><table><thead><tr><th>命令名</th><th>功能描述</th><th>使用举例</th></tr></thead><tbody><tr><td>cd</td><td>打开当前目录</td><td>cd dirname</td></tr><tr><td>pwd</td><td>显示当前目录的路径名</td><td>pwd</td></tr><tr><td>ls</td><td>显示当前目录的内容</td><td>ls -la</td></tr><tr><td>dircmp</td><td>比较两个目录的内容</td><td>dircmp dir1 dir2</td></tr><tr><td>mkdir</td><td>创建一个目录</td><td>mkdir dirname</td></tr><tr><td>rmdir</td><td>删除一个目录</td><td>rmdir dirname</td></tr><tr><td>mvdir</td><td>移动或重命名一个目录</td><td>mvdir dir1 dir2</td></tr></tbody></table><h2 id="_2-文件操作" tabindex="-1"><a class="header-anchor" href="#_2-文件操作"><span>2.文件操作</span></a></h2><table><thead><tr><th>命令名</th><th>功能描述</th><th>使用举例</th></tr></thead><tbody><tr><td>cat</td><td>显示或连接文件</td><td>cat filename</td></tr><tr><td>ln</td><td>联接文件</td><td>ln -s file1 file2</td></tr><tr><td>find</td><td>使用匹配表达式查找文件</td><td>find . -name &quot;*.c&quot; -print</td></tr><tr><td>file</td><td>显示文件类型</td><td>file filename</td></tr><tr><td>open</td><td>使用默认的程序打开文件</td><td>open filename</td></tr><tr><td>od</td><td>显示非文本文件的内容</td><td>od -c filename</td></tr><tr><td>cp</td><td>复制文件或目录</td><td>cp file1 file2</td></tr><tr><td>rm</td><td>删除文件或目录</td><td>rm filename</td></tr><tr><td>mv</td><td>改变文件名或所在目录</td><td>mv file1 file2</td></tr><tr><td>pg</td><td>分页格式化显示文件内容</td><td>pg filename</td></tr><tr><td>more</td><td>分屏显示文件内容</td><td>more filename</td></tr></tbody></table><h2 id="_3-选择操作" tabindex="-1"><a class="header-anchor" href="#_3-选择操作"><span>3.选择操作</span></a></h2><table><thead><tr><th>命令名</th><th>功能描述</th><th>使用举例</th></tr></thead><tbody><tr><td>comm</td><td>显示两有序文件的公共和非公共行</td><td>comm file1 file2</td></tr><tr><td>wc</td><td>统计文件的字符数、词数和行数</td><td>wc filename</td></tr><tr><td>nl</td><td>给文件加上行号</td><td>nl file1 &gt;file2</td></tr><tr><td>awk</td><td>在文件中查找并处理模式</td><td>awk &#39;{print $1 $1}&#39; filename</td></tr><tr><td>sort</td><td>排序或归并文件</td><td>sort -d -f -u file1</td></tr><tr><td>uniq</td><td>去掉文件中的重复行</td><td>uniq file1 file2</td></tr><tr><td>diff</td><td>比较并显示两个文件的差异</td><td>diff file1 file2</td></tr><tr><td>sed</td><td>非交互方式流编辑器</td><td>sed &quot;s/red/green/g&quot; filename</td></tr><tr><td>cut</td><td>显示文件每行中的某些域</td><td>cut -f1,7 -d: /etc/passwd</td></tr><tr><td>colrm</td><td>从标准输入中删除若干列</td><td>colrm 8 20 file2</td></tr><tr><td>paste</td><td>横向连接文件</td><td>paste file1 file2</td></tr><tr><td>head</td><td>显示文件的最初几行</td><td>head -20 filename</td></tr><tr><td>tail</td><td>显示文件的最后几行</td><td>tail -15 filename</td></tr></tbody></table><h2 id="_4-安全操作" tabindex="-1"><a class="header-anchor" href="#_4-安全操作"><span>4.安全操作</span></a></h2><table><thead><tr><th>命令名</th><th>功能描述</th><th>使用举例</th></tr></thead><tbody><tr><td>chown</td><td>改变文件或目录的属主</td><td>chown newowner filename</td></tr><tr><td>chgrp</td><td>改变文件或目录的所属组</td><td>chgrp staff filename</td></tr><tr><td>xlock</td><td>给终端上锁</td><td>xlock -remote</td></tr><tr><td>passwd</td><td>修改用户密码</td><td>passwd</td></tr><tr><td>chmod</td><td>改变文件或目录的权限</td><td>chmod ug+x filename umask</td></tr><tr><td>umask</td><td>定义创建文件的权限掩码</td><td>umask 027</td></tr></tbody></table><h2 id="_5-编程操作" tabindex="-1"><a class="header-anchor" href="#_5-编程操作"><span>5.编程操作</span></a></h2><table><thead><tr><th>命令名</th><th>功能描述</th><th>使用举例</th></tr></thead><tbody><tr><td>touch</td><td>更新文件的访问和修改时间</td><td>touch -m 05202400 filename</td></tr><tr><td>dbx</td><td>命令行界面调试工具</td><td>dbx a.out</td></tr><tr><td>xde</td><td>图形用户界面调试工具</td><td>xde a.out</td></tr><tr><td>make</td><td>维护可执行程序的最新版本</td><td>make</td></tr></tbody></table><h2 id="_6-进程操作" tabindex="-1"><a class="header-anchor" href="#_6-进程操作"><span>6.进程操作</span></a></h2><table><thead><tr><th>命令名</th><th>功能描述</th><th>使用举例</th></tr></thead><tbody><tr><td>nice</td><td>改变待执行命令的优先级</td><td>nice cc -c *.c</td></tr><tr><td>renice</td><td>改变已运行进程的优先级</td><td>renice +20 32768</td></tr><tr><td>ps</td><td>显示进程当前状态</td><td>ps u</td></tr><tr><td>kill</td><td>终止进程</td><td>kill -9 30142</td></tr></tbody></table><h2 id="_7-时间操作" tabindex="-1"><a class="header-anchor" href="#_7-时间操作"><span>7.时间操作</span></a></h2><table><thead><tr><th>命令名</th><th>功能描述</th><th>使用举例</th></tr></thead><tbody><tr><td>date</td><td>显示系统的当前日期和时间</td><td>date</td></tr><tr><td>cal</td><td>显示日历</td><td>cal 8 1996</td></tr><tr><td>time</td><td>统计程序的执行时间</td><td>time a.out</td></tr></tbody></table><h2 id="_8-网络与通信操作" tabindex="-1"><a class="header-anchor" href="#_8-网络与通信操作"><span>8.网络与通信操作</span></a></h2>',19),c=t("thead",null,[t("tr",null,[t("th",null,"命令名"),t("th",null,"功能描述"),t("th",null,"使用举例")])],-1),p=t("tr",null,[t("td",null,"mail"),t("td",null,"阅读和发送电子邮件"),t("td",null,"mail")],-1),m=t("tr",null,[t("td",null,"write"),t("td",null,"给另一用户发送报文"),t("td",null,"write username pts/1")],-1),u=t("tr",null,[t("td",null,"mesg"),t("td",null,"允许或拒绝接收报文"),t("td",null,"mesg n")],-1),_=t("td",null,"ftp",-1),f=t("td",null,"在本地主机与远程主机之间传输文件",-1),b={href:"http://ftp.sp.net.edu.cn",target:"_blank",rel:"noopener noreferrer"},g=t("tr",null,[t("td",null,"rcp"),t("td",null,"在本地主机与远程主机之间复制文件"),t("td",null,"rcp file1 host1:file2")],-1),k=t("td",null,"ping",-1),y=t("td",null,"给一个网络主机发送 回应请求",-1),w={href:"http://hpc.sp.net.edu.cn",target:"_blank",rel:"noopener noreferrer"},x=t("td",null,"telnet",-1),v=t("td",null,"远程登录",-1),M={href:"http://hpc.sp.net.edu.cn",target:"_blank",rel:"noopener noreferrer"},S=t("tr",null,[t("td",null,"rlogin"),t("td",null,"远程登录"),t("td",null,"rlogin hostname -l username")],-1),T=t("tr",null,[t("td",null,"rsh"),t("td",null,"在远程主机执行指定命令"),t("td",null,"rsh f01n03 date")],-1),q=l('<h2 id="_9-korn-shell-命令" tabindex="-1"><a class="header-anchor" href="#_9-korn-shell-命令"><span>9.Korn Shell 命令</span></a></h2><table><thead><tr><th>命令名</th><th>功能描述</th><th>使用举例</th></tr></thead><tbody><tr><td>history</td><td>列出最近执行过的几条命令及编号</td><td>history</td></tr><tr><td>r</td><td>重复执行最近执行过的某条命令</td><td>r -2</td></tr><tr><td>alias</td><td>给某个命令定义别名</td><td>alias del=rm -i</td></tr><tr><td>unalias</td><td>取消对某个别名的定义</td><td>unalias del</td></tr></tbody></table><h2 id="_10-其它命令" tabindex="-1"><a class="header-anchor" href="#_10-其它命令"><span>10.其它命令</span></a></h2><table><thead><tr><th>命令名</th><th>功能描述</th><th>使用举例</th></tr></thead><tbody><tr><td>stty</td><td>显示或重置控制键定义</td><td>stty -a</td></tr><tr><td>du</td><td>查询磁盘使用情况</td><td>du -k subdir</td></tr><tr><td>df</td><td>显示文件系统的总空间和可用空间</td><td>df /tmp</td></tr><tr><td>w</td><td>显示当前系统活动的总信息</td><td>w</td></tr><tr><td>env</td><td>显示当前所有设置过的环境变量</td><td>env</td></tr><tr><td>who</td><td>列出当前登录的所有用户</td><td>who</td></tr><tr><td>whoami</td><td>显示当前正进行操作的用户名</td><td>whoami</td></tr><tr><td>tty</td><td>显示终端或伪终端的名称</td><td>tty</td></tr><tr><td>uname</td><td>显示操作系统的有关信息</td><td>uname -a</td></tr><tr><td>clear</td><td>清除屏幕或窗口内容</td><td>clear</td></tr></tbody></table>',4);function N(z,A){const e=n("ExternalLinkIcon");return i(),h("div",null,[s,t("table",null,[c,t("tbody",null,[p,m,u,t("tr",null,[_,f,t("td",null,[d("ftp "),t("a",b,[d("ftp.sp.net.edu.cn"),r(e)])])]),g,t("tr",null,[k,y,t("td",null,[d("ping "),t("a",w,[d("hpc.sp.net.edu.cn"),r(e)])])]),t("tr",null,[x,v,t("td",null,[d("telnet "),t("a",M,[d("hpc.sp.net.edu.cn"),r(e)])])]),S,T])]),q])}const F=a(o,[["render",N],["__file","menu.html.vue"]]),V=JSON.parse('{"path":"/MacOS/Terminal/menu.html","title":"Mac 命令","lang":"zh-CN","frontmatter":{"lang":"zh-CN","title":"Mac 命令","description":"Mac 命令的文档","head":[["meta",{"property":"og:url","content":"https://tgy.ink/MacOS/Terminal/menu.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"Mac 命令"}],["meta",{"property":"og:description","content":"Mac 命令的文档"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mac 命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.目录操作","slug":"_1-目录操作","link":"#_1-目录操作","children":[]},{"level":2,"title":"2.文件操作","slug":"_2-文件操作","link":"#_2-文件操作","children":[]},{"level":2,"title":"3.选择操作","slug":"_3-选择操作","link":"#_3-选择操作","children":[]},{"level":2,"title":"4.安全操作","slug":"_4-安全操作","link":"#_4-安全操作","children":[]},{"level":2,"title":"5.编程操作","slug":"_5-编程操作","link":"#_5-编程操作","children":[]},{"level":2,"title":"6.进程操作","slug":"_6-进程操作","link":"#_6-进程操作","children":[]},{"level":2,"title":"7.时间操作","slug":"_7-时间操作","link":"#_7-时间操作","children":[]},{"level":2,"title":"8.网络与通信操作","slug":"_8-网络与通信操作","link":"#_8-网络与通信操作","children":[]},{"level":2,"title":"9.Korn Shell 命令","slug":"_9-korn-shell-命令","link":"#_9-korn-shell-命令","children":[]},{"level":2,"title":"10.其它命令","slug":"_10-其它命令","link":"#_10-其它命令","children":[]}],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":4,"words":1199},"filePathRelative":"MacOS/Terminal/menu.md","localizedDate":"2022年11月3日"}');export{F as comp,V as data};