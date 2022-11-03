---
title: 1px边框
---
# 1px边框

::: normal-demo  一像素边框

```html
<div class="scale-1px" ></div>
```

```js
document.querySelector(".scale-1px").addEventListener("click", () => {
  alert("非常强大");
});
```

```css

.box{
  height: 100px;
  width: 100px;
}
.scale-1px{
  position: relative;
  border:none;
}
.scale-1px:after{
  content: '';
  position: absolute;
  bottom: 0;
  background: #000;
  width: 100%;
  height: 1px;
  /*核心是利用transform缩放边框*/
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
```

:::


::: normal-demo  一像素边框 四边

```html

<div class="scale-1px box" ></div>

```

```css

.box{
  height: 100px;
  width: 100px;
}
.scale-1px{
  position: relative;
  border:none;
}
.scale-1px:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #000;
  border-radius: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 200%;
  height: 200%;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: left top;
  transform-origin: left top;
}
```

:::


