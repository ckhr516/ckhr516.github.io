---
title: Vue3按需自动导入api插件
date: 2023-08-25 16:55:40
permalink: /pages/511872/
categories:
  - 笔记
tags:
  - vue3
  - vue-router
  - pinia
  - vite
---

## 一、安装`unplugin-auto-import`插件

```
npm i unplugin-auto-import -D
```

## 二、在`vite.config.js`中配置插件

```js
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // dts: 'src/auto-imports.d.ts', // 可以自定义文件生成的位置，默认是根目录下
      imports: ["vue", "vue-router", "pinia"]
    })
  ]
})
```

## 三、配置`tsconfig.json`

```js
{
  "include": [
    "./auto-imports.d.ts"
  ]
}
```
