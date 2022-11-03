---
lang: zh-CN
title: meta标签
description: meta标签的文档
---

### meta 标签使用说明

> 标签可分为两部分：HTTP-EQUIV 和 NAME 变量


- 用以说明主页制作所使用的文字以及语言编码

```html
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
```

- 定时让网页在指定的时间 n 内，跳转到你的页面；

```html
<meta http-equiv="Refresh" content="n;url=https://github.com/Jamin2Guan/summary" />
```

- 告诉 IE 浏览器，无论是否用 DTD 声明文档标准，IE8/9 都会以 IE7 引擎来渲染页面

```html
<meta http-equiv="X-UA-Compatible" content="IE=7" />
```

- 告诉 IE 浏览器，IE8/9 都会以 IE8 引擎来渲染页面

```html
<meta http-equiv="X-UA-Compatible" content="IE=8" />
```

- 告诉 IE 浏览器，IE8/9 及以后的版本都会以最高版本 IE 来渲染页面

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```

- IE=edge 告诉 IE 使用最新的引擎渲染网页，chrome=1 则可以激活 Chrome Frame

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
```


- 将网站添加到主屏幕快速启动方式，仅针对 ios 的 safari 顶端状态条的样式(可选 default/black/black-translucent)

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
```


- robots 用来告诉搜索机器人哪些页面需要索引，哪些页面不需要索引

```html
<meta name="robots" content="none" />
```

> content 的参数有 all,none,index,noindex,follow,nofollow。默认是 all。

- 标注网页的作者

```html
<meta name="author" content="zhangsan,lisi" />
```

- keywords 用来告诉搜索引擎你网页的关键字是什么

```html
<meta name="keywords" content="word1,word2" />
```

- description 用来告诉搜索引擎你的网站主要内容

```html
<meta name="description" content="desc content" />
```

- 禁止浏览器从本地计算机的缓存中访问页面内容

```html
<meta http-equiv="Pragma" content="no-cache" />
```

```html
<meta name="referrer" content="never" />
`



```html
<!-- 设置缩放 -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui"
/>
<!-- 可隐藏地址栏，仅针对IOS的Safari（注：IOS7.0版本以后，safari上已看不到效果） -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- 仅针对IOS的Safari顶端状态条的样式（可选default/black/black-translucent ） -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- IOS中禁用将数字识别为电话号码/忽略Android平台中对邮箱地址的识别 -->
<meta name="format-detection" content="telephone=no, email=no" />

其他meta标签
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit" />
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true" />
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320" />
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait" />
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait" />
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes" />
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true" />
<!-- UC应用模式 -->
<meta name="browsermode" content="application" />
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app" />
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no" />
```

