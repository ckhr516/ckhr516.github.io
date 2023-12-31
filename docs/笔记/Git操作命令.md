---
title: Git操作命令
date: 2023-08-28 09:54:42
permalink: /pages/cce5c2/
categories:
  - 笔记
tags:
  - Git
---

设置 git 用户名、邮箱

```
git config --global user.name <git用户名>
git config --global user.email <git邮箱>
```

新建分支

```
git branch <分支名>
```

查看远程全部分支

```
git branch -a
```

切换分支

```
git checkout <分支名>
```

本地创建 dev 分支并将远程 dev 分支更新到本地分支

```
git checkout -b dev origin/dev
```

删除现有远程连接

```
git remote rm origin
```

初始化本地仓库

```
git init
```

添加修改文件到暂存

```
git add .
```

将暂存提交到本地当前分支

```
git commit -m "xxx"
```

将本地仓库连接到远程仓库

```
git remote add origin <https://xxxxxxx.xx/xx/>
```

提交代码到指定分支

```
// -u 参数，会自动在本地分支与远程分支建立关联。如果远程没有该分支将会自动创建。
git push -u origin <分支名>

// 将本地分支上传到远程分支中
git push origin <本地分支>:<远程分支>
```

`Git`合并冲突

```
git stash           // 暂时缓存
git pull --rebase   // 拉取远程数据
git stash pop       // 删除缓存中对应的stash
跟git pull          // 更新同步(取出本地缓存与远程同步)
再手动合并，自动合并

git stash list --   // 查看stash历史
git stash drop      // 剔除stash历史内容
```
