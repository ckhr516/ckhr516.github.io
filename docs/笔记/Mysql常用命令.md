---
title: Mysql常用命令
date: 2023-08-23 16:22:11
permalink: /pages/146036/
categories:
  - 笔记
tags:
  - 数据库
---

## 一、启动与退出

1、进入 MySQL：`mysql -uroot -p`  
2、退出 MySQL：`quit` 或 `exit`  
3、清屏：`system clear`;

## 二、库操作

1、创建数据库

```
create database <数据库名>;
```

2、显示所有的数据库

```
show databases;
```

3、删除数据库

```
drop database <数据库名>;
```

4、连接数据库

```
use <数据库名>;
```

5、查看当前使用的数据库

```
select database();
```

6、查看一个库的创建信息

```
show create database <库名>;
```

## 三、表操作

1、查看所有的表

```
show tables;
```

2、查看一个表的创建信息

```
show create table <表名>;
```

1、新建表

```
create table <表名> ( <字段名1> <类型1> [,..<字段名n> <类型n>]);
```

2、查询表

```
desc 表名
或者
show columns from 表名
```

3、删除表

```
drop table <表名>;
```

4、修改表  
&emsp;（1）修改字段类型

```
alter table <表名> modify <字段名> <类型>;
```

&emsp;（2）修改字段名称

```
alter table <表名> change <原字段名> <新字段名> <类型>;
```

&emsp;（3）新增字段

```
alter table <表名> add <要添加的字段名> <字段类型> <约束条件>;
```

&emsp;（4）在某个数据后新增字段

```
alter table <表名> add <要添加的字段名> <类型> <约束条件> <想要添加的位置>;
```

&emsp;（5）新增字段到第一个

```
alter table <表名> add <要添加的字段名> <字段类型> <约束条件> first;
```

&emsp;（6）删除字段

```
alter table <表名> drop <字段名>;
```

5、更改表名

```
alter table 原表名 rename 新表名;
```

## 四、增删改查

1、添加表中数据

```
insert into <表名> values("要添加的数据");
```

2、删除表中数据

```
delete from 表名 where 条件;
```

3、修改表中数据

```
update 表名 set <字段=新值> where 条件;
```

4、查询表中数据

```
select <字段1，字段2，...> from <表名> where <表达式>;
```
