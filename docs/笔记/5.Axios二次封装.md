---
title: Axios二次封装
date: 2023-08-25 09:15:38
permalink: /pages/ee908c/
categories:
  - 笔记
tags:
  - axios
  - vue3
---

## 一、安装`axios`

```
npm install axios -S
```

## 二、创建`axios`实例

新建`request.js`

```js
import axios from "axios"
import store from "@/store"
import router from "@/router"
import { getToken } from "./auth"
import { Message, MessageBox } from "element-ui"
const service = axios.create({
  // 如果配置了proxy代理，就设置为 "/api"
  baseURL: "http://xxx.com/",
  // 超时时间暂定5s
  timeout: 5000
})
```

## 三、请求拦截器

```js
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前 判断是否存在token，如果存在的话，则给每个header都加上token
    // const token = getToken()
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    // ...
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
```

`auth.js`文件

```js
import Cookies from "js-cookie"
const TokenKey = "Admin-Token"

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
```

## 四、响应拦截器

```js
instance.interceptors.response.use(
  (response) => {
    return response.data // 返回主体内容
  },
  (error) => {
    // 判断“err.response”是否存在这一步是为了防止没有响应
    switch (error.response && error.response.status) {
      case 400:
        error.message = "请求错误(400)"
        Message.error({
          message: error.response.data.msg || error.message
        })
        break
      case 401:
        error.message = "登录信息已过期，请重新登录" // (401)
        MessageBox.confirm(error.response.data.msg || error.message, {
          title: "提示",
          confirmButtonText: "确定",
          showCancelButton: false,
          showClose: false,
          type: "warning"
        }).then(() => {
          store.dispatch("user/resetToken").then(() => {
            router.push("/login")
          })
        })
        break
      case 403:
        error.message = "拒绝访问(403)"
        break
      case 404:
        error.message = "请求出错(404)"
        break
      case 408:
        error.message = "请求超时(408)"
        Message.error({
          message: error.response.data.msg || error.message
        })
        break
      case 500:
        error.message = "服务器错误(500)"
        Message.error({
          message: error.response.data.msg || error.message
        })
        break
      case 501:
        error.message = "服务未实现(501)"
        break
      case 502:
        error.message = "网络错误(502)"
        break
      case 503:
        error.message = "服务不可用(503)"
        break
      case 504:
        error.message = "网络超时(504)"
        break
      case 505:
        error.message = "HTTP版本不受支持(505)"
        break
    }
    if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") !== -1
    ) {
      Message.error({
        message: "网络异常"
      })
    }
    return Promise.reject(error)
  }
)
export default service
```

## 五、创建`api`

```js
import request from "./request"
export const GetData = (params) => request.get("/list", { params })
export const PostPosts = (data) => request.post("/posts", data)
```
