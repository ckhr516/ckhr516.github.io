---
title: Vue3路由配置
date: 2023-08-24 09:47:01
permalink: /pages/32952d/
categories:
  - 笔记
tags:
  - vue3
  - vue-router
  - typescript
---

## 一、安装`vue-router`

```
npm install vue-router@4
```

## 二、创建`router`文件夹和`index.ts`文件

配置路由：

```js
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/HelloWord.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
```

## 三、在`main.ts`中引入使用

```js
import router from "@/router"
createApp(App).use(router).mount("#app")
```

## 四、在`App.vue`使用`<router-view />`

```html
<template>
  <router-view />
</template>
```
