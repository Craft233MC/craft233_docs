---
copyright: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">VuePress Theme Hope</a> 主题 | Copyleft© 2023 Craft233  <a href="https://icp.gov.moe/?keyword=20232336" target="_blank">萌ICP备20232336号</a>
title: qs箱子商店指令
order: 5
---
## 介绍
QuickShop是一个简单而强大的商店插件，可以让您和其他玩家快速方便地创建和管理自己的商店。  
您只需要在一个箱子上放置一个告示牌，就可以开始出售或购买任何物品，无需任何命令。
以上废话由Bing Chat生成  
简单版的指令<code>/qs</code>是完整指令<code>/quickshop</code>的简写
::: info
要选择一个商店，只需要准心对准商店的箱子即可
:::
## 使用
### 创建商店
手持准备交易物品点击一个箱子，此时聊天栏内会要求输入价格  
价格最低为0.01,使用指令<code>/money</code>可以查看自己的余额  
默认创建后为出售模式  
收购模式可以使用下面的指令切换为出售模式  
```
/qs sell
```
### 收购模式
收购模式可以从其他玩家手里买下物品  
使用如下指令可将商店从出售模式转换为收购模式  
```
/qs buy
```

### 修改价格
指令<code>/qs price</code>可以修改面向的自己的商店的价格，包括收购和出售  
修改的价格的要求与创建时一样，但不能和原来的价格一样  
下面是一个示例  
修改面向的商店的价格为3
```
/qs price 3
```

### 删除商店
你可以使用<code>/qs remove</code>删除选择的商店
::: warning
这一步并没有警告提示
:::  
