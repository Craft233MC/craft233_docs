---
copyright: Copyleft © 2023 Craft233
title: res领地指令
order: 6
---
## 介绍
Residence它可以让玩家保护自己的家园和其他区域，防止被破坏和入侵。  
你可以创建一个属于你的领地，设置权限，邀请朋友，甚至出租给其他玩家。  
你还可以使用一些特殊的功能，比如传送点，自动门，自动灯，自动农场等等。  
::: info
以上废话由Bing Chat生成
:::
## 选择圈地
Craft233圈地选择工具是木锄。  
通过木锄左右键分别选择第一和第二个点  
基岩版玩家可以长按选择第二个点再直接选择第一个点完成选区
::: info
选区是选择一个矩形的两个对角
:::
## 创建领地
选区完成后就是创建领地  
使用如下指令可以创建领地
::: warning
领地名不能含有<code>中文</code>和<code>.</code>等不支持的字符
:::
```
/res create <领地名>
```
这是一个例子：创建一个名为home的领地
```
/res create home
```
## 设置领地传送点
设置一个好的传送为自己的领地！  
进入领地内，移动到要准备设置传送点的位置，输入以下指令即可设置
```
/res tpset
```

## 设置领地全局规则
为领地设置规则，这里的设置对所有非领地管理员有效  
### 语法
在要设置的领地内通过gui设置
```
/res set 
```


不在要设置的领地内通过gui设置
```
/res set <领地名>
```

使用命令进行配置
```
/res set <领地名> <权限> <false|true|remove> 
```
remove为删除设置
### 示例
打开<code>home</code>领地的设置面板
```
/res set home
```


设置领地<code>home</code>允许生成动物
```
/res set home animals true
```
<!--
### 权限
::: info
权限列表由Bing Chat收集
:::
- animalkilling - 允许或禁止杀死动物。
- animals - 允许或禁止动物进入领地。
- anvil - 允许或禁止使用铁砧。
- backup - 允许或禁止备份领地数据。
- beacon - 允许或禁止使用信标。
- bed - 允许或禁止使用床。
- build - 允许或禁止放置或破坏方块。
- button - 允许或禁止按按钮。
- cake - 允许或禁止吃蛋糕。
- canimals - 允许或禁止动物在领地内繁殖。
- chat - 允许或禁止在领地内聊天。
- chest - 允许或禁止打开箱子。
- command - 允许或禁止在领地内使用命令。
- container - 允许或禁止打开容器类方块（如箱子、熔炉等）。
- creeper - 允许或禁止爆炸造成方块损坏。
- crops - 允许或禁止践踏农作物。
- day - 设置领地内的时间为白天。
- destroy - 允许或禁止破坏方块。
- diode - 允许或禁止使用红石中继器和比较器。
- door - 允许或禁止打开门。
- dryup - 允许或禁止水和岩浆干涸。
- dye - 允许或禁止给羊和皮革染色。
- enderpearl - 允许或禁止使用末影珍珠传送。
- explode - 允许或禁止爆炸造成伤害和方块损坏。
- feed - 设置领地内玩家的饱食度为满值。
- fireball - 允许或禁止火球造成伤害和方块损坏。
- firework - 允许或禁止在领地内放烟花。
- flow - 允许或禁止水和岩浆流动，覆盖lavaflow和waterflow权限。
- flowerpot - 允许或禁止放置花盆中的植物。
  -->
## 设置玩家的领地规则
为单独玩家设置领地权限
### 语法
使用gui编辑玩家在当前领地的权限
```
/res pset <玩家名>
```

使用gui编辑玩家在某领地内的权限
```
/res pset <领地名> <玩家名>
```

使用命令编辑玩家在某领地的权限
```
/res pset <领地名> <玩家名> <权限> <false|true|remove>
```
### 示例
使用gui编辑玩家<code>zhangsan</code>在当前领地的权限
```
/res pset zhangsan
```

使用gui编辑玩家<code>zhangsan</code>在某领地<code>home</code>内的权限
```
/res pset home zhangsan
```

使用命令允许玩家<code>zhangsan</code>在领地<code>home</code>的使用音符盒权限
```
/res pset home zhangsan note true
```

## 给予某人领地
有时更换玩家名进行财产转移可以这样用
### 语法
```
/res give <领地名> <被给予玩家名> -confirmed
```
### 示例
给予玩家<code>zhangsan</code>领地<code>home</code>
```
/res give home zhangsan -confirmed
```

## 删除某个领地
某个领地不想要了，可以使用这个指令删除
### 语法
删除某个领地
```
/res remove <领地名>
```
执行后需要再输入<code>/res confirm</code>确认删除
### 示例 
删除名为<code>home</code>的领地
```
/res remove home 
/res confirm
```

## 更改进入/离开消息
出入领地的消息可以自定义，而且支持使用"&"改变颜色
### 语法
更改进入/离开的消息
```
/res message <领地名> <enter/leave> <要改变的消息>
```

删除进入/离开自定消息
```
/res message <领地名> remove <enter/leave>
```
### 示例
更改领地<code>home</code>的进入消息为<code>测试</code>
```
/res message home enter 测试
```

删除领地<code>home</code>自定义的进入消息
```
/res message home remove enter
```


## 。。。