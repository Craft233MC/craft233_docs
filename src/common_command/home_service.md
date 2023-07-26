---
title: Home系列指令
copyright: Copyleft © 2023 Craft233
order: 3
---
## 包含指令
服务器home指令系列包括<code>/home /homes /sethome /edithome /delhome /publichome</code>


## /home
### 介绍
<code>/home</code>是用于传送到自己已设置的家   
当<code>/home</code>后没有接任何参数时，将会打开gui界面选择要传送的家

### 语法
```
/home [家名称]
```
### 示例
传送到名为home的家
```
/home home
```


## /homes
### 介绍
<code>/homes</code>没有任何参数，无论后面接什么，都会直接打开家的gui列表，与<code>/home</code>每加任何参数执行的效果相同

### 语法
```
/homes
```


## /sethome
### 介绍
<code>/sethome</code>顾名思义，就是设置家的意思，用于设置一个家。  
<code>/sethome</code>后必须有一串字符用作要设置的家的名字，设置的家的位置为你执行此指令的位置

### 语法
```
/sethome <家的名称>
```
### 示例
在当前位置设置一个名为home的家
```
/sethome home
```


## /edithome
### 介绍
一样的，<code>/edithome</code>就是编辑家的意思，可用于设置已有的家的重命名、简介、重设位置和是否公开
### 语法
```
/edithome <家的名称> [rename|description|relocate|privacy]
```
稍微有点复杂，但不用担心，都有示例
#### 重命名
重新命名一个家的名称
```
/edithome <原来的名称> rename <新的名称>
```
::: info
名称支持使用"&"来改变颜色(gui菜单显示)，但不建议，使用<code>/home</code>也要输入"&"和对应的颜色符
:::
#### 简介
用于设置已有家的简介，默认为""没有。设置后会显示在<code>/home</code>和<code>/homes</code>以及<code>/publichome</code>的gui选择界面。  
名称支持使用"&"符号改变颜色  
新设置的简介会覆盖旧的简介  
```
/edithome <要设置的家的名称> description <要设置的描述>
```
#### 公开性
用于设置是否公开家，公开后别人可以在用<code>/publichome</code>查看到所有公开的家
```
/edithome <要设置的家的名称> privacy 
```
可根据命令反馈查看是否公开，也可直接使用<code>/edithome <家名></code>查看

### 示例
#### 重命名
将名为<code>asd</code>的家重命名为<code>home</code> 
```
/edithome asd rename home
```

#### 设置简介
设置名为<code>home</code>的简介为<code>某人的家</code>
```
/edithome home description 某人的家
```

#### 重设位置
重设名为<code>home</code>的家到当前位置
```
/edithome home relocate
```

#### 设置公开/私有
设置名为<code>home</code>的家的公开性，
```
/edithome home privacy 
```

## /delhome
### 介绍
用于删除一个已存在的家
### 语法
删除名为<code>home</code>的家
```
/delhome home
```

## /publichome 
### 介绍
可以查看所有公开的家，非gui的开时，可以接<code>玩家名.公开的家名</code>进行传送
### 语法
打开公开的家的gui菜单 
```
/publichome
```

传送到某个公开的家
```
/publichome 玩家名.公开的家名
```
### 示例
传送到玩家<code>zhangsan</code>的公开的家<code>public</code>

```
/publichome zhangsan.public
```
