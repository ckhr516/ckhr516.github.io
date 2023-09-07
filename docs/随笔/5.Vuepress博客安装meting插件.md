---
title: Vuepress博客安装meting插件
date: 2023-09-06 10:12:48
permalink: /pages/2de03b/
categories:
  - 随笔
tags:
  - vuepress
  - meting
---

vuepress 使用 vdoing 主题，使用 meting 插件时的一些麻烦事。。。

<!-- more -->

## vuepress-plugin-meting 安装报错

报错：

> **[Vue warn]: Error in nextTick: "TypeError: Cannot read properties of undefined (reading '$stable')"**

解决：因为 vue2.7.0+与 vue-aplayer 不兼容，需要将依赖项 vue 版本回退到 2.6.14。

```js
// package.json
{
  "devDependencies": {},
  "dependencies": {},
  "overrides": {
      "vue": "2.6.14",
      "vue-server-renderer": "2.6.14",
      "vue-template-compiler": "2.6.14"
    }
}
```

再用`npm i`重新安装一下依赖包。<font color="red">注意：</font>使用`cnpm i`无法自动生成`package-lock.json`文件，无法锁定 vue 版本
