---
title: 自杀指令
copyright: Copyleft © 2023 Craft233
order: 2
---
## 用途
/suicide用于服务器中快速结束自己的生命
## 分支
### Craft233
服务器内有两个用于自杀的指令：<code>/suicede</code>和<code>/esuicide</code>  
  
<code>/suicide</code>是为了防止基岩版玩家因为立即重生的插件影响而卡在重生界面而改变的命令，与传统自杀命令直接<code>player.setHeath(0)</code>不同。我们改变了策略，先设置玩家血量为2,再赋予凋零效果实现自杀。可以避免卡在重生界面

### EssentialsX
服务器也有由essentialsX插件提供的自杀指令  
使用指令<code>/esuicide</code>即可触发
