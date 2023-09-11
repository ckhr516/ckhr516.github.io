---
title: Socket配置
date: 2023-08-28 11:11:28
permalink: /pages/c2a406/
categories:
  - 笔记
tags:
  - socket
---

`vue`配置：

```
wsurl = `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/socket/`
```

`nginx`配置：

```
location /socket/ { 		# websocket 代理
  rewrite ^/socket/(.*)$ /$1 break; 	#拦截标识去除
  proxy_pass http://192.168.2.60:9948;	 #这里是http不是ws,代理的ip和port写ws访问的实际地址
  proxy_http_version 1.1; 	#这里必须使用http 1.1
  #下面两个必须设置，请求头设置为ws请求方式
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "Upgrade";
}
```
