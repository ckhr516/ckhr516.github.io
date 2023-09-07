---
title: node版本报错
date: 2023-09-07 09:26:50
permalink: /pages/7a8500/
categories:
  - 随笔
tags:
  - node
---

## Error: error:0308010C:digital envelope routines::unsupported

- 解决一：
  将 node 降级到 16.x 版本
- 解决二：

```js
// package.json
{
  "scripts": {
    // 在windows中使用 SET，在linux中使用 export
    "dev": "SET NODE_OPTIONS=--openssl-legacy-provider && 操作",
    "build": "SET NODE_OPTIONS=--openssl-legacy-provider && 操作"
  }
}
```
