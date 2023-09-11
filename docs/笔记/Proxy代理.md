---
title: Proxy代理
date: 2023-08-25 14:49:31
permalink: /pages/8115bf/
categories:
  - 笔记
tags:
  - proxy
  - vite
  - vue
---

## 一、`vite.config.js`配置

```js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [...],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  }
})
```

## 二、`vue.config.js`配置

```js
const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:80",
        changOrigin: true, //如果接口跨域这里就要这个参数配置
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
})
```
