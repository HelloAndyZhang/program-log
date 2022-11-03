---
lang: zh-CN
title: zshrc说明
icon: linter
tag:
    - .bashrc 
    - .zshrc 
    - .profile 
    - .bash_profile 
---


bashrc和profile的差异在于：
- bashrc是在系统启动后就会自动运行。
- profile是在用户登录后才会运行。
- 进行设置后，可运用source bashrc命令更新bashrc，也可运用source profile命令更新profile。PS：通常我们修改bashrc,有些linux的发行版本不一定有profile这个文件
- /etc/profile中设定的变量(全局)的可以作用于任何用户，而~/.bashrc等中设定的变量(局部)只能继承/etc/profile中的变量，他们是"父子"关系。
#### .bash_profile
~/.bash_profile: 每个用户都可使用该文件输入专用于自己使用的shell信息，当用户登录时，该文件仅仅执行一次!默认情况下,他设置一些环境变量,执行用户的.bashrc文件。

~/.bash_logout: 当每次退出系统(退出bash shell)时，执行该文件。

~/.bash_profile 是交互式、login方式进入bash运行的。

~/.bashrc是交互式non-login方式进入bash运行的，通常二者设置大致相同，所以通常前者会调用后者。

####  .zshrc
zsh终端命令工具的全局变量设置，和bashrc区别是 默认很多linux系统是base，就配置在bashrc里，如里是使用zsh 就配置在 zshrc里