---
title: Vite路径别名配置
date: 2023-08-24 09:11:07
permalink: /pages/9ee581/
categories:
  - 笔记
tags:
  - vite
  - vue3
  - typescript
---

## 一、安装 ts 类型定义文件的包

```
npm install @types/node --save-dev
```

## 二、在`vite.config.ts`文件中加入

```js
import { resolve } from 'path'

export default defineConfig({
  plugins: [...],
  resolve: {
    // 配置路径别名
    alias: [
      {
        find: '@', // 指向的是src目录
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
```

## 三、在`tsconfig.json`文件中的`compilerOptions`下加入即可

```js
{
  "compilerOptions": {
    ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```
