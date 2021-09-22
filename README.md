# vue3-count-to

> 基于 vue-count-to 升级改造

## 预览

[在线预览](https://codepen.io/xiaofan9/pen/QWGGdKJ)

## 目的

- 由于原有作者好像没打算升级版本，故而自己升级维护一下。

## 兼容

- v1.1.* 仅支持vue3；
- v1.0.* 同时兼容vue2、vue3，亦能在ts下使用（可能存在ts识别不太对的问题）

## 版本

如果需要vue2-ts版本，请使用 [vue-count-to-ts](https://npmjs.org/package/vue-count-to-ts) 包；

如果仅需要vue2版本，请直接使用 [vue-count-to](https://npmjs.org/package/vue-count-to) 包

## 运行环境

> 已经测试的运行环境，vite建议使用2.0+，webpack建议使用4.0+

[vite](https://vitejs.dev/)、[webpack](https://webpack.docschina.org/)

## 安装 && 引入

> 安装

``` bash
npm install vue3-count-to --save
# 或
yarn add vue3-count-to --save
```

> 全局注册

```javascript
import countTo from 'vue3-count-to';
```

```javascript
import { createApp } from 'vue';

const app = createApp(...);

app.use(countTo);
```

> 局部引入

```javascript
<template>
  <count-to></count-to>
</template>

<script>
import { CountTo } from 'vue3-count-to';

export default {
  components: {
    CountTo
  }
}
</script>
```

> 浏览器引用

```html
<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/vue3-count-to"></script>

<body>
  <div id="app">
    <count-to></count-to>
  </div>
</body>

<script>
const app = window.Vue.createApp();

app.use(window.countTo).mount('#app');
</script>
```

## 文档

参看 [vue-count-to](https://github.com/PanJiaChen/vue-countTo) 文档。
