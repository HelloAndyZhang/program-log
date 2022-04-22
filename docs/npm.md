---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---

```shell
# 查看 npm 的版本 
$ npm -v  //6.4.0 << 安装成功会返回版本号

# 查看各个命令的简单用法
$ npm -l 
 
# 查看 npm 命令列表
$ npm help

# 查看 npm 的配置
$ npm config list -l

# 查看安装的模块
$ npm ls 

# 卸载当前项目或全局模块 
$ npm uninstall <name> [-g] 

eg: npm uninstall gulp --save-dev  
    npm i gulp -g

# 查看本机的npm缓存
$ npm config get cache

# 清空npm缓存
$ npm cache clean -f 

# 查看npm当前镜像源
$ npm config get registry  

# 设置npm镜像源为淘宝镜像
$ npm config set registry https://registry.npm.taobao.org/  

# 查看yarn当前镜像源
$ yarn config get registry   

# 设置yarn镜像源为淘宝镜像
$ yarn config set registry https://registry.npm.taobao.org/ 

```

##### 镜像源地址

```shell

npm --- https://registry.npmjs.org/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/

```

##### 镜像源地址

```shell

npm --- https://registry.npmjs.org/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/

```
