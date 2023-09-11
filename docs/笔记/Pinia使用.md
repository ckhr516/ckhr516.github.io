---
title: Pinia使用
date: 2023-08-24 11:34:43
permalink: /pages/981342/
categories:
  - 笔记
tags:
  - pinia
  - vue3
  - typescript
---

## 一、安装`Pinia`

```
npm install pinia
```

在`mian.ts`中引入并使用

```js
import { createPinia } from "pinia"
createApp(App).use(createPinia()).mount("#app")
```

## 二、`Pinia`的基本使用

在`user.ts`中定义一个名为`user`的模块

```js
import { defineStore } from 'pinia'
export const userStore = defineStore('user', {
    state: () => {
        return {
            count: 1,
            name: '李四'
        } as {
          count: number
          name: string
        }
    },
    getters: {
      doubleCount: (state): number => state.count * 2
    },
    actions: {
      increment() {
        this.count++
      }
    }
})
```

使用`satae`

```js
import { userStore } from "@/store/user.ts"
const user_store = userStore()
```

响应式解构`state`需要使用`toRefs`或者`pinia`自带的方法`storeToRefs`

```js
import { userStore } from "@/store/user.ts"
const { count } = storeToRefs(userStore)
```

## 三、`Pinia`本地持久化

安装`pinia-plugin-persistedstate`

```
npm i pinia-plugin-persistedstate
```

在`Pinia`实例上使用

```js
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
createApp(App).use(createPinia().use(piniaPluginPersistedstate)).mount("#app")
```

在 `store` 模块中使用`persist`

```js
export const useDemo1 = defineStore('demo1', {
  state: () => {
    return {
      count: 1
    } as {
      count: number
    }
  },
  getters: {...},
  actions: {...},
  //persist: true,
  persist: {
    // 在这里进行自定义配置
    key: 'my-custom-key', // 这个 Store 将被持久化存储在 localStorage 中的 my-custom-key key 中
    storage: sessionStorage, // 默认值：localStorage 这个 store 将被持久化存储在 sessionStorage中
    paths: ['count'] // 指定 state 中哪些数据需要被持久化
  }
})
```
