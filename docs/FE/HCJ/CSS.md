---
lang: zh-CN
title: CSS
description: CSS的文档
icon: css
---


### 禁止用户选择页面中的文字或者图片

```css
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
```

### 移动端如何清除输入框内阴影

```css
-webkit-appearance: none;
```

### 禁止文本缩放

```css
webkit-text-size-adjust: 100%;
```

### 用户设置字号放大或者缩小导致页面布局错误

```css
用户设置字号放大或者缩小导致页面布局错误
```

### 移动端去除 type 为 number 的箭头

```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
```


### IOS 的 H5 页面 scroll 不流畅解决方案

```css
webkit-overflow-scrolling: touch;
```

### IOS 禁止保存或拷贝图像

```css
img {
  -webkit-touch-callout: none;
}
```

### ios 和 android 下触摸元素时出现半透明灰色遮罩

```css
/*E:这个是代指字符，实际自己替换，ID,CLASS,TAG*/
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
```
