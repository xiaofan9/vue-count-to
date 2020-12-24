# vue3-count-to

> 基于 vue-count-to 升级改造

## 目的

- 由于原有作者好像没打算升级版本，故而自己升级维护一下。

## 兼容

  - 当前版本同时兼容 vue2、vue3，亦能在ts下使用

## 安装 && 引入

> * 安装
``` bash
npm install vue3-count-to --save
```
> * 全局注册

```javascript
import countTo from 'vue3-count-to';
```

使用 Vue 2:

```javascript
Vue.use(countTo);
```

使用 Vue 3:

```javascript
import { createApp } from 'vue';

const app = createApp(...);

app.use(countTo);
```

局部引入

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

> * 浏览器使用

```html
<script src="https://unpkg.com/vue"></script>
<!-- or -->
<script src="https://unpkg.com/vue@next"></script>
<script src="https://unpkg.com/vue3-count-to"></script>
```
## 文档

参看 [vue-count-to](https://github.com/PanJiaChen/vue-countTo) 文档。
