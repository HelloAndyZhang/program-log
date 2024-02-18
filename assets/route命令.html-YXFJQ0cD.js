import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{i as a,j as n,z as s}from"./app-lp0sOEvl.js";const t={},o=s(`<h1 id="route命令" tabindex="-1"><a class="header-anchor" href="#route命令"><span>route命令</span></a></h1><p>在计算机网络中，路由器是负责转发网络流量的设备，当数据报到达路由器时，路由器必须确定将其路由到目的地的最佳方法，<code>route</code>命令用于查看和更改内核路由表，在不同的系统上，命令语法不同，所以实际时可以查看命令的帮助来确定具体使用方法。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>route <span class="token punctuation">[</span>-CFvnee<span class="token punctuation">]</span>
route <span class="token punctuation">[</span>-v<span class="token punctuation">]</span> <span class="token punctuation">[</span>-A family<span class="token punctuation">]</span> <span class="token function">add</span> <span class="token punctuation">[</span>-net<span class="token operator">|</span>-host<span class="token punctuation">]</span> target <span class="token punctuation">[</span>netmask Nm<span class="token punctuation">]</span> <span class="token punctuation">[</span>gw Gw<span class="token punctuation">]</span> 
      <span class="token punctuation">[</span>metric N<span class="token punctuation">]</span> i <span class="token punctuation">[</span>mss M<span class="token punctuation">]</span> <span class="token punctuation">[</span>window W<span class="token punctuation">]</span> <span class="token punctuation">[</span>irtt m<span class="token punctuation">]</span> <span class="token punctuation">[</span>reject<span class="token punctuation">]</span> <span class="token punctuation">[</span>mod<span class="token punctuation">]</span> <span class="token punctuation">[</span>dyn<span class="token punctuation">]</span> 
      <span class="token punctuation">[</span>reinstate<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>dev<span class="token punctuation">]</span> If<span class="token punctuation">]</span>
route <span class="token punctuation">[</span>-v<span class="token punctuation">]</span> <span class="token punctuation">[</span>-A family<span class="token punctuation">]</span> del <span class="token punctuation">[</span>-net<span class="token operator">|</span>-host<span class="token punctuation">]</span> target <span class="token punctuation">[</span>gw Gw<span class="token punctuation">]</span> <span class="token punctuation">[</span>netmask Nm<span class="token punctuation">]</span> 
      <span class="token punctuation">[</span>metric N<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>dev<span class="token punctuation">]</span> If<span class="token punctuation">]</span>
route <span class="token punctuation">[</span>-V<span class="token punctuation">]</span> <span class="token punctuation">[</span>--version<span class="token punctuation">]</span> <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>--help<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><ul><li><code>(none)</code>: 查看当前所有路由定义。</li><li><code>-A family</code>: 使用指定的地址族，可以使用<code>route --help</code>查询支持的地址族，通常支持的地址族有<code>inet (DARPA Internet)</code>、<code>inet6 (IPv6)</code>、<code>ax25 (AMPR AX.25)</code>、<code>netrom (AMPR NET/ROM)</code>、<code>ipx (Novell IPX)</code>、<code>ddp (Appletalk DDP)</code>、<code>x25 (CCITT X.25)</code>。</li><li><code>-F</code>: 对内核的<code>FIB</code>转发信息库路由表进行操作，这是默认值。</li><li><code>-C</code>: 操作内核的路由缓存。</li><li><code>-v</code>: 输出详细操作。</li><li><code>-n</code>: 显示数字地址，而不是尝试确定符号主机名，如果要确定到名称服务器的路由消失的原因，这将很有用。</li><li><code>-e</code>: 使用<code>netstat</code>格式显示路由表，<code>-ee</code>将使用路由表中的所有参数生成很长的一行。</li><li><code>del</code>: 删除路由。</li><li><code>add</code>: 添加路由。</li><li><code>target</code>: 目标网络或主机，可以用点分十进制或主机<code>/</code>网络名称提供<code>IP</code>地址。</li><li><code>-net</code>: 添加的目标是一个网络。</li><li><code>-host</code>: 添加的目标是一个主机。</li><li><code>netmask NM</code>: 添加网络路由时，要使用的网络掩码。</li><li><code>gw GW</code>: 通过网关路由数据包，必须首先可以访问指定的网关，这通常意味着必须事先设置到网关的静态路由，如果您指定本地接口之一的地址，它将用于确定数据包应路由到的接口。</li><li><code>metric M</code>: 将路由表(由路由守护程序使用)中的度量字段设置为M。</li><li><code>mss M</code>: 将通过此路由的连接的<code>TCP</code>最大段大小<code>MSS</code>设置为<code>M</code>个字节，缺省值为设备<code>MTU</code>减去标题，或在发生路径<code>mtu</code>发现时使用较低的<code>MTU</code>，当路径<code>mtu</code>发现不起作用时(通常是由于配置错误的防火墙阻止了所需的<code>ICMP</code>碎片)，此设置可用于在另一端强制使用较小的<code>TCP</code>数据包。</li><li><code>window W</code>: 将通过此路由的连接的<code>TCP</code>窗口大小设置为<code>W</code>字节，仅在<code>AX.25</code>网络上使用，并且驱动程序无法处理背靠背帧。</li><li><code>irtt m</code>: 将通过此路由的<code>TCP</code>连接的初始往返时间<code>irtt</code>设置为<code>m</code>毫秒<code>1-12000</code>，仅在<code>AX.25</code>网络上使用，如果省略，则使用<code>RFC 1122</code>默认值<code>300ms</code>。</li><li><code>reject</code>: 安装阻塞路由，这将强制路由查找失败，这可以用于在使用默认路由之前屏蔽网络，此外要注意这不是用于防火墙。</li><li><code>mod, dyn, reinstate</code>: 安装动态或修改后的路线，这些标志用于诊断目的，通常仅由路由守护程序设置。</li><li><code>dev If</code>: 强制将路由与指定设备相关联，否则内核将尝试自行确定设备(通过检查现有路由和设备规格以及添加路由的位置)，在大多数普通网络中，基本不需要此功能。如果<code>dev If</code>是命令行上的最后一个选项，则可以省略单词<code>dev</code>，因为它是默认值，否则路由修饰符的顺序<code>metric - netmask - gw - dev</code>无关紧要。</li><li><code>-h, --help</code>: 输出帮助信息。</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>显示绑定到服务器的所有<code>IP</code>的路由表。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>route <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加默认网关，这将分配一个网关地址，所有不属于此网络的数据包都将在该网关地址上转发。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>route <span class="token function">add</span> default gw <span class="token number">169.213</span>.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列出内核的路由缓存信息，为了更快地路由数据包，内核保留了路由缓存信息。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>route <span class="token parameter variable">-Cn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拒绝路由到特定主机或网络。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>route <span class="token function">add</span> <span class="token parameter variable">-host</span> <span class="token number">192.168</span>.1.51 reject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除默认网关，这可能会导致某些互联网故障，所以在继续执行该命令之前，请记下默认网关。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>route del default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们连接<code>PPTP</code>后，通常我们会配置将一个网段添加路由，来指定数据报通过<code>ppp0</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">192.168</span>.0.0/16 dev ppp0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置将一个域名添加路由，来指定数据报通过<code>ppp0</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>route <span class="token function">add</span> <span class="token parameter variable">-host</span> jwgl.sdust.edu.cn dev ppp0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将所有<code>D</code>类多播<code>IP</code>路由都设置为通过<code>eth0</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>route <span class="token function">add</span> <span class="token parameter variable">-net</span> <span class="token number">224.0</span>.0.0 netmask <span class="token number">240.0</span>.0.0 dev eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>https://www.computerhope.com/unix/route.htm
https://blog.csdn.net/u013485792/article/details/51700808
https://www.geeksforgeeks.org/route-command-in-linux-with-examples/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),c=[o];function d(i,l){return a(),n("div",null,c)}const r=e(t,[["render",d],["__file","route命令.html.vue"]]),m=JSON.parse('{"path":"/MacOS/Terminal/route%E5%91%BD%E4%BB%A4.html","title":"route命令","lang":"zh-CN","frontmatter":{"description":"route命令 在计算机网络中，路由器是负责转发网络流量的设备，当数据报到达路由器时，路由器必须确定将其路由到目的地的最佳方法，route命令用于查看和更改内核路由表，在不同的系统上，命令语法不同，所以实际时可以查看命令的帮助来确定具体使用方法。 语法 参数 (none): 查看当前所有路由定义。 -A family: 使用指定的地址族，可以使用rou...","head":[["meta",{"property":"og:url","content":"https://tgy.ink/MacOS/Terminal/route%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"阑风伏雨"}],["meta",{"property":"og:title","content":"route命令"}],["meta",{"property":"og:description","content":"route命令 在计算机网络中，路由器是负责转发网络流量的设备，当数据报到达路由器时，路由器必须确定将其路由到目的地的最佳方法，route命令用于查看和更改内核路由表，在不同的系统上，命令语法不同，所以实际时可以查看命令的帮助来确定具体使用方法。 语法 参数 (none): 查看当前所有路由定义。 -A family: 使用指定的地址族，可以使用rou..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-03T03:23:04.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-03T03:23:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"route命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-03T03:23:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1667445784000,"updatedTime":1667445784000,"contributors":[{"name":"helloandyzhang","email":"972997077@qq.com","commits":1}]},"readingTime":{"minutes":3.97,"words":1191},"filePathRelative":"MacOS/Terminal/route命令.md","localizedDate":"2022年11月3日","autoDesc":true}');export{r as comp,m as data};
