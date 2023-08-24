---
copyright: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | Copyleft© 2023 Craft233  <a href="https://icp.gov.moe/?keyword=20232336" target="_blank">萌ICP备20232336号</a>
title: co指令
order: 4
---
## 介绍
co由插件coreproject提供，用于查询/还原方块，对普通玩家开放的子指令包括<code>help inspect ~~lookup~~ near</code>  
可用于追溯恶意破坏
::: info
lookup子指令文档由Bing Chat生成
:::
### near子指令
使用<code>/co near</code>可获取附近方块的修改数据

### help子指令
如同意思help帮助，使用会显示所有的co指令的帮助  
::: info
只输入<code>/co</code>而不接任何子指令时也会打印帮助信息
:::

### inspect子指令
此指令用于开/关检查器，输入一次打开，再次输入关闭。具体是否打开可以查看聊天栏的通知  

打开后点击方块就会打印此方块的修改信息到聊天栏  
```
/co i
```

## ~~lookup子指令~~(服务器内已禁用)  
这个在帮助菜单里可以看到"高级方块数据查询"
### 介绍
<code>/co lookup</code>是用于查询一个区域或一个玩家的操作记录的子指令。  
你可以输入多种参数来过滤和排序查询结果，也可以使用分页和预览功能来查看更多细节。  
你可以用<code>/co lookup ?</code>来查看所有可用的参数和用法。

### 语法
```
/co lookup <参数>

```
#### 参数
- user:<玩家名>：查询指定玩家的操作记录，可以使用*来代表所有玩家。
- action:<动作>：查询指定动作的操作记录，可以使用+/-来代表放置/破坏方块，或者使用block/container/chat/kill/session/command来代表不同类型的动作。
- block:<方块>：查询指定方块或物品的操作记录，可以使用材质ID或名称，也可以使用#container来代表所有容器类方块。
- radius:<半径>：查询以你为中心的指定半径范围内的操作记录，单位为方块数。
- time:<时间>：查询指定时间范围内的操作记录，可以使用数字加上单位（s/m/h/d/w/mo/y）来表示相对时间，或者使用日期格式（yyyy.MM.dd-hh:mm:ss）来表示绝对时间。
- exclude:<参数>：排除指定参数的操作记录，可以使用user/block/action等参数。
- r:<颜色>：查询指定颜色的羊毛或地毯等方块的操作记录，可以使用颜色代码或名称。
- e:<实体>：查询指定实体类型的操作记录，可以使用实体ID或名称。
- t:<类型>：查询指定类型的交易记录，可以使用buy/sell/rent来代表不同类型的交易。
- id:<编号>：查询指定编号的交易记录，编号可以在交易告示牌上看到。
- world:<世界名>：查询指定世界内的操作记录。  
- x:<数值> y:<数值> z:<数值>：查询指定坐标点附近的操作记录，单位为方块数。  

### 示例
查询玩家zhangsan在过去一小时内放置或破坏过的所有方块
```
/co lookup user:zhangsan time:1h
```
   
查询自己周围10个方块范围内所有玩家在过去一天内破坏过的TNT
```
/co lookup block:TNT radius:10 time:1d action:-
```
  
查询玩家lisi在2023年4月1日下午3点到4点之间在world_nether世界内杀死过的所有实体
```
/co lookup user:lisi action:kill world:world_nether time:2023.04.01-15:00:00 2023.04.01-16:00:00
```