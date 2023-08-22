---
title: Linux
copyright: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | Copyleft© 2023 Craft233  <a href="https://icp.gov.moe/?keyword=20232336" target="_blank">萌ICP备20232336号</a>
order: 2
---
## 安装Java
Minecraft1.18开始要求最低使用Java17，所以第一步就是安装Java17  
### 分系统安装  
Linux发行版一般有自己的包管理器，一般一键就可以进行Linux的安装  
以下是一些例子  
#### Debian
```
sudo apt-get install openjdk-17-jre
```
#### Ubuntu
```
sudo apt install openjdk-17-jre
```
#### Centos/RHEL
```
sudo yum install java-17-openjdk
```
#### ArchLinux
```
sudo pacman -S jre17-openjdk
```

### 通用安装方法  
如果你非上面的系统，可以用这个办法安装  
先打开[甲骨文Java下载页](https://www.oracle.com/cn/java/technologies/downloads/)  
选择JDK17并选择Linux  
打开系统终端，输入uname -m ,如果是arm64就选择“ARM64 Compressed Archive”  
如果是x86_64,就选择“x64 Compressed Archive”  
找到下载的文件，并创建单独一个文件夹存放Java  
把下载的文件移动到给Java准备的文件夹，然后解压  
```
tar -zxvf Java的压缩包
```

然后添加环境变量  
编辑~/.bashrc或者~/.zshrc(有哪个就编辑哪个，不知道就都编辑)  
在末尾添加上这一段
```
export JAVA_HOME=放Java文件夹的路径
export CLASSPATH=$JAVA_HOME/lib/
export PATH=$PATH:$JAVA_HOME/bin
```

### 启动器
Linux下建议HMCL和XMCL  
到官网下载好HMCL后是一个.jar文件  
将启动器单独放在一个文件夹内后双击启动器  
如果没反应可以这样启动 
```
java -jar HMCL启动器文件
```
## 启动游戏  
选择好你想要的登陆方式，并下载游戏  
Craft233服务器版本允许1.19.X和1.20.X的版本加入，建议下载最新的正式版游戏  