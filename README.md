# vue-count-to-ts

> 基于 vue-count-to 升级改造

## 预览

[在线预览](https://codepen.io/xiaofan9/pen/ExXRzyM)

## 目的

- 由于原有作者好像没打算升级版本，故而自己升级维护一下。

## 版本

- 需要vue3版本，请使用 [vue3-count-to](https://npmjs.org/package/vue3-count-to) 包

- 仅需要vue2不需要ts，请直接使用 [vue-count-to](https://npmjs.org/package/vue-count-to) 包

## 安装 && 引入

> 安装

``` bash
npm install vue-count-to-ts --save
# 或
yarn add vue-count-to-ts --save
```

> 全局注册

```javascript
import countTo from 'vue-count-to-ts';
```

```javascript
Vue.use(countTo);
```

> 局部引入

```javascript
<template>
  <count-to></count-to>
</template>

<script>
import { CountTo } from 'vue-count-to-ts';

export default {
  components: {
    CountTo
  }
}
</script>
```

> 浏览器引用

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-count-to-ts"></script>

<body>
  <div id="app">
    <count-to></count-to>
  </div>
</body>

<script>
// vue2，window 环境会默认注入 vue-count-to，也可手动注入挂载在 window.countTo 变量下
new window.Vue({
  el: '#app',
})
</script>
```

## 文档

参看 [vue-count-to](https://github.com/PanJiaChen/vue-countTo) 文档。
